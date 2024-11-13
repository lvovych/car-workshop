import pluginJs from "@eslint/js";
import html from 'eslint-plugin-html';
import cssModules from 'eslint-plugin-css-modules';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js', '**/*.html'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      ...pluginJs.configs.recommended,
      html,
      'css-modules': cssModules
    }
  },
    
];