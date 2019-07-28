module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  env: {
    jest: true
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'no-console': 'off',
    'no-prototype-builtins': 'off'
  }
};
