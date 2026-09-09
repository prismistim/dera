import { defineConfig } from 'oxlint'

export default defineConfig({
  options: {
    typeAware: true,
  },
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'vitest'],
  categories: {
    correctness: 'error',
  },
  env: {
    buildin: true,
  },
  overrides: [
    {
      files: ['apps/web/**/*.{js,ts,vue}'],
      env: {
        browser: true,
      },
    },
    {
      files: ['apps/difficulty-board-sync/**/*.ts'],
      env: {
        worker: true,
      },
    },
  ],
})
