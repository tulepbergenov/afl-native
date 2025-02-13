import { fixupPluginRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import {
  default as pluginReact,
  default as reactPlugin,
} from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactHooksExtra from "eslint-plugin-react-hooks-extra";
import reactNative from "eslint-plugin-react-native";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tailwind.configs["flat/recommended"],
  {
    ...importPlugin.flatConfigs.recommended,
    rules: {
      "import/no-unresolved": "off",
    },
  },
  eslintPluginPrettierRecommended,
  {
    ignores: ["node_modules", ".expo"],
    plugins: {
      "react-native": fixupPluginRules(reactNative),
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      perfectionist,
      "simple-import-sort": simpleImportSort,
      "react-hooks-extra": reactHooksExtra,
    },
  },
  {
    ...reactPlugin.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
      "perfectionist/sort-imports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "react-hooks/exhaustive-deps": "error",
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "react/jsx-indent": ["error", 2],
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
