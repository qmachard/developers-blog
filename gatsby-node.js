const path = require(`path`);
const { fetchPosts, fetchProjects } = require('./gatsby/services/github');

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  const { GATSBY_GH_USERNAME, GATSBY_GH_REPOSITORY } = process.env;

  const posts = await fetchPosts(GATSBY_GH_USERNAME, GATSBY_GH_REPOSITORY);
  const projects = await fetchProjects(GATSBY_GH_USERNAME);

  posts.forEach(post => {
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

  const blogPostTemplate = path.resolve(`src/templates/post.tsx`);

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

  result.data.allPost.nodes.forEach(post => {
    createPage({
      path: post.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
