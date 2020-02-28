const md = require('markdown-it')();
const YamlFront = require('yaml-front-matter');
const prism = require('markdown-it-prism');

md.use(prism);

/**
 * @param {string} markdown
 *
 * @returns {object}
 */
const parseMarkdown = markdown => {
  const { slug, cover, excerpt, __content } = YamlFront.loadFront(markdown);

  return {
    slug,
    cover,
    excerpt,
    html: md.render(__content),
  };
};
exports.transformMarkdownToHTML = parseMarkdown;
