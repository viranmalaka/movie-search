module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["prettier"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/prettier"
  ],
  rules: {}
};
