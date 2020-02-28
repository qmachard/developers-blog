const path = require(`path`);
const { fetchPosts } = require('./gatsby/services/github');

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  const posts = await fetchPosts();

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
