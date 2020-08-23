module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["jest", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  env: {
    "jest/globals": true,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};
