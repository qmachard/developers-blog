const MarkdownIt = require('markdown-it');
const YamlFront = require('yaml-front-matter');

const md = new MarkdownIt();

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
