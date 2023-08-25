module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
  ],
  // parserOptions: {
  //   ecmaVersion: 2021,
  //   sourceType: 'module',
  // },
};
