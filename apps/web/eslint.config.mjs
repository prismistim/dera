import oxlint from 'eslint-plugin-oxlint'
import withNuxt from './.nuxt/eslint.conifg.mjs'

export default withNuxt().prepend(oxlint.configs['flat/recommended'])
