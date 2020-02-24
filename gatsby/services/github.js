const fetch = require('node-fetch');
const { memoize } = require('../utils/memoize');

const GITHUB_BASE_URL = `http://api.github.com`;
const GITHUB_REPOSITORY = `qmachard/developers-blog`;

const fetchUser = memoize(async login => {
  return fetch(`${GITHUB_BASE_URL}/users/${login}`)
    .then(response => response.json())
    .then(user => ({
      id: user.id,
      name: user.name,
      username: user.login,
      avatar: user.avatar_url,
      github: user.html_url,
      website: user.blog,
    }));
});
exports.fetchUser = fetchUser;

const fetchPosts = async () => {
  const posts = await fetch(
    `${GITHUB_BASE_URL}/repos/${GITHUB_REPOSITORY}/issues?state=closed&labels=blog`,
  ).then(response => response.json());

  return Promise.all(
    posts.map(async post => ({
      id: post.id,
      title: post.title,
      author: await fetchUser(post.user.login),
      path: `/posts/${post.id}`,
      excerpt: '',
      cover: '',
      html: post.body,
      tags: [],
    })),
  );
};
exports.fetchPosts = fetchPosts;
