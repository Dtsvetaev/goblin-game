import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "error",
    },
  },
  pluginJs.configs.recommended,
  {
    files: ["**/*.test.js", "**/__tests__/*.js"], 
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules, 
    },
    languageOptions: {
      globals: {
        ...globals.jest, 
      },
    },
  },
];
