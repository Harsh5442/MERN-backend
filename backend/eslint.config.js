// eslint.config.js
module.exports = {
  languageOptions: {
    globals: {
      // List of global variables that your code might use
      node: true,
      es2021: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Customize your ESLint rules here
  },
};
