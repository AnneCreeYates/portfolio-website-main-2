import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import security from 'eslint-plugin-security';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/', '.husky/']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly'
      }
    },
    plugins: {
      security,
      import: importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...security.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      'no-console': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'security/detect-eval-with-expression': 'warn',
      'security/detect-unsafe-regex': 'warn',
      'import/no-unresolved': 'warn',
      'import/no-unused-modules': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
];
