module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};