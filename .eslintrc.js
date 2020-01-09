module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    'airbnb-base'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': 'off',
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'import/no-unresolved': 'off',
    'space-before-function-paren': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'state',
        'el',
        'Vue'
      ]
    }]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
