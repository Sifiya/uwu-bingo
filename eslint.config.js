import js from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/typescript';
import * as tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules', '.next/', 'dist', 'public', '.history/'],
  },
  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    ...solid,
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/js/no-whitespace-before-property': 'error',
      '@stylistic/js/space-before-function-paren': ['error', 'never'],
      '@stylistic/js/space-before-blocks': ['error', 'always'],
      '@stylistic/js/space-in-parens': ['error', 'never'],
      '@stylistic/js/space-infix-ops': 'error',
    },
  },
];
