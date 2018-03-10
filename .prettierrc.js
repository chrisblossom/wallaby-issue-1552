/**
 * This file is managed by sanejs
 *
 * source: @sanejs/preset-style
 * namespace: prettier
 *
 * DO NOT MODIFY
 */

'use strict';

const Sanejs = require('@sanejs/core');

const { configManager } = new Sanejs();

const prettier = {
    semi: true,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'always',

    /**
     * Needed for Node v6 support
     */
    overrides: [
        {
            files: '*.js',
            excludeFiles: '*/**',
            options: {
                trailingComma: 'es5',
            },
        },
    ],
};

module.exports = configManager({
    namespace: 'prettier',
    config: prettier,
});
