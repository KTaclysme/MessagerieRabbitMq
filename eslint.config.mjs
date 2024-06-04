import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  pluginReactConfig,

  {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module",
    },
    "plugins": ["@typescript-eslint"],
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  
    "rules": {
      "@typescript-eslint/no-unused-vars": "error",
      // to enforce using type for object type definitions, can be type or interface 
      "@typescript-eslint/consistent-type-definitions": ["error", "type"], 
    },
  
    "env": {
      "browser": true,
      "es2021": true
    }
  }
];