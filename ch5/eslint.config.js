import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Equivalent of .eslintignore
  globalIgnores(['dist', 'vite.config.js']),

  {
    files: ['**/*.{js,jsx}'],

    // Equivalent of "extends": [...]
    extends: [
      js.configs.recommended, // eslint:recommended
      react.configs.flat.recommended, // plugin:react/recommended
      react.configs.flat['jsx-runtime'], // plugin:react/jsx-runtime
      jsxA11y.flatConfigs.recommended, // plugin:jsx-a11y/recommended
      prettier, // prettier
      reactHooks.configs.flat.recommended, // plugin:react-hooks/recommended
      reactRefresh.configs.vite, // plugin:react-refresh
    ],

    // Equivalent of env + parserOptions
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    // Equivalent of settings: { react: { version: "detect" } }
    settings: {
      react: {
        version: 'detect',
      },
    },

    // Your existing rules + anything the book adds
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
