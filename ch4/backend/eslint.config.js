import js from '@eslint/js'
import globals from 'globals'
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
      prettier, // prettier
    ],

    // Equivalent of env + parserOptions
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    // Equivalent of settings: { react: { version: "detect" } }
    settings: {},

    // Your existing rules + anything the book adds
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
