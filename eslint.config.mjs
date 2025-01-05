import { dirname } from 'path';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import stylistic from '@stylistic/eslint-plugin';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  {
    ignores: ['node_modules', '.next/', 'dist', 'public', '.history/'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...ts.configs.recommended,
  prettierConfigRecommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/max-len': ['error', { code: 120 }],
    },
  },
];

export default eslintConfig;
