import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
    // Базовая конфигурация плагина Vue
    pluginVue.configs['flat/essential'],

    // Наши кастомные правила
    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        plugins: { js, prettierPlugin, prettierConfig },
        extends: ['js/recommended', 'prettierConfig'],
        languageOptions: { globals: globals.browser },
        rules: {
            ...prettierConfig.recommended.rules,
            eqeqeq: 'warn', // Использовать строгое сравнение
            curly: 'warn', // Использовать фигурные скобки для блоков
            'vue/multi-word-component-names': 'off', // Разрешить однословные имена компонентов
        },
    },
])
