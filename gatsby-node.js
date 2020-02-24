const path = require('path');
const fetch = require('node-fetch');
const MarkdownIt = require('markdown-it');
const MarkdownItFrontMatter = require('markdown-it-front-matter');

const formatAuthorData = author => ({
  username: author.login,
  url: author.html_url,
});

const formatPostData = post => {
  let frontmatter = {};

  const md = MarkdownIt()
    .use(MarkdownItFrontMatter, function(fm) {
      frontmatter = fm;
    });

  const html = md.render(post.body);

  console.log('frontmatter', frontmatter);

  return {
    title: post.title,
    author: formatAuthorData(post.user),
    created_at: post.created_at,
    updated_at: post.updated_at,
    published_at: post.closed_at,
    html: html,
    path: frontmatter.path,
    cover: frontmatter.cover,
  };
};

exports.sourceNodes = async ({
  actions: { createNode },
}) => {
  const posts = await fetch(`https://api.github.com/repos/qmachard/developers-blog/issues?labels=blog&state=closed`)
    .then(result => result.json());

  posts.forEach(post => {
    createNode({
      id: `${post.id}`,
      parent: null,
      children: [],
      internal: {
        type: `post`,
        contentDigest: post.node_id,
      },
      ...formatPostData(post),
    });
  });
};


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/post.tsx`);

  const result = await graphql(`
    {
      allPost(sort: {order: DESC, fields: published_at}) {
        nodes {
          html
          id
          title
          published_at
          updated_at
          created_at
          author {
            url
            username
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.frontmatter.path,
  //     component: blogPostTemplate,
  //     context: {}, // additional data can be passed via context
  //   })
  // })
};
