module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true,
    'node': true,
    'react-native/react-native': true,
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    'react-native'
  ],
  'rules': {
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'indent': ['error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-raw-text': 2,
  }
};