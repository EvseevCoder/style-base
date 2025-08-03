import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Базовая конфигурация плагина Vue
  pluginVue.configs["flat/essential"],

  // Наши кастомные правила
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      // 'no-console': 'warn', // Не использовать console.log
      'eqeqeq': 'warn', // Использовать строгое сравнение
      "curly": 'warn', // Использовать фигурные скобки для блоков
      'vue/multi-word-component-names': 'off', // Разрешить однословные имена компонентов
    },
  },
]);
