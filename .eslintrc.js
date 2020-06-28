module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': ["plugin:vue/base"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 'off'
  }
}
