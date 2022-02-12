module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
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

  plugins: ['eslint-plugin-react-hooks'],

  settings: {
    react: {
      version: 'detect',
    },
  },
};
