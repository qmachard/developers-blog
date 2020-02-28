const { memoize } = require('../utils/memoize');
const { transformMarkdownToHTML } = require('../utils/markdown');
const { octokit } = require('../utils/octokit');

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

const fetchPosts = async () => {
  const posts = await octokit.issues
    .listForRepo({
      owner: 'qmachard',
      repo: 'developers-blog',
      state: 'closed',
      labels: 'blog',
    })
    .then(results => results.data);

  return Promise.all(
    posts.map(async post => {
      const { html, cover, excerpt, slug } = transformMarkdownToHTML(post.body);

      return {
        id: post.id,
        title: post.title,
        author: await fetchUser(post.user.login),
        path: `/posts/${slug}`,
        excerpt: excerpt || '',
        cover: cover || '',
        html,
        tags: [],
      };
    }),
  );
};
exports.fetchPosts = fetchPosts;
