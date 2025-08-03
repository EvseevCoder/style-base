/** @type {import('stylelint').Config} */

export default {
    // Базовый парсер — postcss-html (понимает <style> в .vue)
    customSyntax: 'postcss-html',

    // Набор правил, уже настроенный под SCSS
    extends: ['stylelint-config-standard-scss'],

    // Для чистых .scss используем postcss-scss
    overrides: [
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],

    rules: {
        'scss/load-no-partial-leading-underscore': null,
        'scss/at-mixin-pattern': null,
        'selector-class-pattern': null,
    },
}
