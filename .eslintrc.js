module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    main: 'index.js',
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': ['off'],
  },
};
