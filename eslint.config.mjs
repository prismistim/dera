import oxlint from 'eslint-plugin-oxlint'
import withNuxt from './.nuxt/eslint.conifg.mjs'

export default withNuxt().prepent(eslint.conifgs['flat/recommended'])
