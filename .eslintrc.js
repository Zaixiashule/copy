// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-sequences": [0],
    "no-debugger": process.env.NODE_ENV === 'production' ? 0 : 2,
    "space-before-function-paren": 0,
    'object-curly-spacing': 0,
    "no-new-wrappers": "error",
    'no-return-assign': 0
  }
}
