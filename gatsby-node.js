const path = require(`path`);
const { fetchPosts, fetchProjects, fetchProfile, fetchReadme } = require('./gatsby/services/github');

const createProfile = (profile, createNode, createContentDigest) => {
  createNode({
    id: `${profile.id}`,
    name: profile.name,
    username: profile.login,
    image: profile.avatar_url,
    bio: profile.bio,
    website: profile.blog,
    location: profile.location,
    twitter: profile.twitter_username,
    background: '',
    internal: {
      type: `profile`,
      contentDigest: createContentDigest(profile),
    },
  });
};

const createAbout = (about, createNode, createContentDigest) => {
  createNode({
    id: `readme`,
    html: about,
    internal: {
      type: `about`,
      contentDigest: createContentDigest(about),
    },
  });
};

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  const { GATSBY_GH_ORGANISATION, GATSBY_GH_REPOSITORY } = process.env;

  const profile = await fetchProfile(GATSBY_GH_ORGANISATION);
  const readme = await fetchReadme(GATSBY_GH_ORGANISATION);
  const posts = await fetchPosts(GATSBY_GH_ORGANISATION, GATSBY_GH_REPOSITORY);
  const projects = await fetchProjects(GATSBY_GH_ORGANISATION);

  createAbout(readme, createNode, createContentDigest);
  createProfile(profile, createNode, createContentDigest);

  posts.forEach((post) => {
    const { id, ...rest } = post;

    createNode({
      id: `${id}`,
      parent: null,
      children: [],
      internal: {
        type: `post`,
        contentDigest: createContentDigest(post),
      },
      ...rest,
    });
  });

  projects.forEach((project, index) => {
    const { id, ...rest } = project;

    createNode({
      id: `${index}-${id}`,
      parent: null,
      internal: {
        type: `project`,
        contentDigest: createContentDigest(project),
      },
      ...rest,
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.jsx`);

  const result = await graphql(`
    {
      allPost {
        nodes {
          title
          path
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);

    return;
  }

  result.data.allPost.nodes.forEach((post) => {
    createPage({
      path: post.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
