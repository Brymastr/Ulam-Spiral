module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'func-names': 0,
    'no-plusplus': 0,
    'object-shorthand': 0,
    eqeqeq: 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
