import withNuxt from './.nuxt/eslint.config.mjs'
import oxlint from 'eslint-plugin-oxlint'

export default withNuxt(
    ...oxlint.configs['flat/recommended'],
    {
        rules: {
            'vue/multi-word-component-names': 'off',
        }
    }
)
