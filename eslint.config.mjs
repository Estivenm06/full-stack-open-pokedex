import globals from "globals";
import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["**/dist/*", "**/test-results/*", "**/e2e-tests/*", "**/playwright-report/*"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
    },
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/linebreak-style": ["error", "unix"],
      "@stylistic/js/quotes": ["error", "single"],
      "@stylistic/js/semi": ["error", "never"],
    },
  },
];
