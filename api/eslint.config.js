import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginJest from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  { files: ["**/*.js"], languageOptions: { globals: globals.node } },
  {
    files: ["**/*.test.js"],
    ...pluginJest.configs["flat/recommended"],
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
  },
]);
