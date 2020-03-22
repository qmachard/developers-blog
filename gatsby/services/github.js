const { memoize } = require('../utils/memoize');
const { transformMarkdownToHTML } = require('../utils/markdown');
const { octokit } = require('../utils/octokit');
const { siteConfig } = require('../../site-config');

const fetchUser = memoize(async username => {
  const user = await octokit.users
    .getByUsername({
      username,
    })
    .then(results => results.data);

  return {
    id: user.id,
    name: user.name,
    username: user.login,
    avatar: user.avatar_url,
    github: user.html_url,
    website: user.blog,
  };
});
exports.fetchUser = fetchUser;

const fetchProjects = async () => {
  return Promise.all(
    siteConfig.projects.map(project => {
      const [owner, repo] = project.split('/');

      return octokit.repos
        .get({
          owner,
          repo,
        })
        .then(project => project.data);
    }),
  );
};

const fetchPosts = async () => {
  const posts = await octokit.issues
    .listForRepo({
      owner: siteConfig.username,
      repo: siteConfig.repository,
      state: 'closed',
      labels: 'blog',
    })
    .then(results => results.data);

  return Promise.all(
    posts.map(async post => {
      const { html, cover, excerpt, slug } = transformMarkdownToHTML(post.body);

      return {
        id: post.number,
        title: post.title,
        author: await fetchUser(post.user.login),
        path: `/posts/${slug}`,
        excerpt: excerpt || '',
        cover: cover || '',
        html,
        tags: post.labels.filter(label => label.name !== 'blog').map(label => label.name),
      };
    }),
  );
};

exports.fetchPosts = fetchPosts;
exports.fetchProjects = fetchProjects;
