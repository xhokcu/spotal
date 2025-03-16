// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    'prettier/prettier': 'error',
    'no-console': 'error',
  },
};
