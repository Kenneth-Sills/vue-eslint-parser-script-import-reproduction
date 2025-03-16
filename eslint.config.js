import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import eslintPluginImportX from 'eslint-plugin-import-x';

export default [
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            'import-x/first': 'error',
        },
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser
            }
        }
    },
    eslintPluginImportX.flatConfigs.recommended
];
