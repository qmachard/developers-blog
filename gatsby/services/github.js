const ghPinnedRepos = require('gh-pinned-repos');

const { memoize } = require('../utils/memoize');
const { transformMarkdownToHTML } = require('../utils/markdown');
const { octokit } = require('../utils/octokit');

const fetchUser = memoize(async (username) => {
  const user = await octokit.users
    .getByUsername({
      username,
    })
    .then((results) => results.data);

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

const fetchProject = (username, repository) => {
  return octokit.repos
    .get({
      owner: username,
      repo: repository,
    })
    .then((project) => project.data);
};

const fetchProjects = async (username) => {
  const projects = await ghPinnedRepos(username);

  return Promise.all(
    projects.map((project) => {
      const [organisation, repository] = project.split('/');

      return fetchProject(organisation, repository);
    }),
  );
};

const fetchPosts = async (username, repository) => {
  const posts = await octokit.issues
    .listForRepo({
      owner: username,
      repo: repository,
      state: 'closed',
      labels: 'blog',
    })
    .then((results) => results.data);

  return Promise.all(
    posts.map(async (post) => {
      const { html, cover, excerpt, slug } = transformMarkdownToHTML(post.body);

      return {
        id: post.number,
        title: post.title,
        author: await fetchUser(post.user.login),
        path: `/posts/${slug}`,
        excerpt: excerpt || '',
        cover: cover || '',
        html,
        tags: post.labels.filter((label) => label.name !== 'blog').map((label) => label.name),
      };
    }),
  );
};

exports.fetchPosts = fetchPosts;
exports.fetchProjects = fetchProjects;
