/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Developer's Blog`,
    description: `Every devs need a simple blog`,
    author: `@qmachard`,
    theme: process.env.GATSBY_SITE_THEME || 'dark',
  },
  pathPrefix: '/developers-blog',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
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
