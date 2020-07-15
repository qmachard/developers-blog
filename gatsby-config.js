/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./config');

module.exports = {
  siteMetadata: config,
  pathPrefix: '/developers-blog',
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          'fonts' /* Matches Gatsby default rules for fonts */,
          'images' /* Matches Gatsby default rules for images */,
          'media' /* Matches Gatsby default rules for media (video/audio) */,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false,
      },
    },
  ],
};
