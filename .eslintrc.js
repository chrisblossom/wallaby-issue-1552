/**
 * This file is managed by sanejs
 *
 * source: @sanejs/preset-style
 * namespace: eslint
 *
 * DO NOT MODIFY
 */

'use strict';

const Sanejs = require('@sanejs/core');

const { configManager, pkg } = new Sanejs();

const eslint = {
    extends: [
        pkg.resolve('@sanejs/preset-style', '@chrisblossom/eslint-config'),
    ],
};

module.exports = configManager({
    namespace: 'eslint',
    config: eslint,
});
