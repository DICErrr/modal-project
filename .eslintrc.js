module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],

  parserOptions: {
    ecmaVersion: 'latest',

    sourceType: 'module',

    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
