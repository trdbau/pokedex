module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 0,
    "import/extensions": 0,
    "import/extensions": 0,
    "no-param-reassign": 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
