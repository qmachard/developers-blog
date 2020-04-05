module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "jsx-a11y",
    "prettier"
  ],
  "rules": {
    "semi": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": [2, { ignore: ['children'] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js", "**/*.stories.jsx"]}]
  }
};
