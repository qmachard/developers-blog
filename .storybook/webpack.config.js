// Based on https://github.com/m-allanson/gatsby-storybook-css-modules
// and adapted to work with SASS.
require('imports-loader');

const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.s[ac]ss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../src'),
  });

  // ignore gatsby-link's global `__loader` variable
  config.module.rules.push({
    test: require.resolve('gatsby-link'),
    loaders: ['imports-loader?___loader=>{enqueue:function(){}}'],
  });

  config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];

  // -- GATSBY CONFIGURATION

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];
  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ];
  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  return config;
};
