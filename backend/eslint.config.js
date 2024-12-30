// eslint.config.js
import eslintRecommended from 'eslint:recommended';
import pluginNodeRecommended from 'plugin:node/recommended';

export default [
  {
    languageOptions: {
      globals: {
        node: true,
        es2021: true,
      },
    },
    rules: {
      // Add your custom rules here
    },
  },
  eslintRecommended,  // Directly include the ESLint recommended config
  pluginNodeRecommended,  // Directly include the plugin:node recommended config
];
