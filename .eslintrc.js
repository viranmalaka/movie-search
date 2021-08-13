module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["prettier", "jest"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:jest/recommended',
    "prettier",
    "prettier/prettier"
  ],
  rules: {}
};
