// Based on https://github.com/m-allanson/gatsby-storybook-css-modules
// and adapted to work with SASS.
require("imports-loader");

const path = require("path");

module.exports = ({config}) => {

  config.module.rules.push({
    test: /\.s[ac]ss$/,
    loaders: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ],
    include: path.resolve(__dirname, '../src')
  });

  // ignore gatsby-link's global `__loader` variable
  config.module.rules.push({
    test: require.resolve("gatsby-link"),
    loaders: ["imports-loader?___loader=>{enqueue:function(){}}"]
  });

  return config;
};
