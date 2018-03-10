/**
 * This file is managed by sanejs
 *
 * source: @sanejs/preset-node-module
 * namespace: babel
 *
 * DO NOT MODIFY
 */

'use strict';

const Sanejs = require('@sanejs/core');

const { configManager } = new Sanejs();

const babel = {
    presets: [
        [
            'env',
            {
                targets: {
                    node: '6.9.0',
                },
                useBuiltIns: true,
            },
        ],
        'flow',
    ],
    plugins: ['dynamic-import-node', 'transform-object-rest-spread'],
};

module.exports = configManager({
    namespace: 'babel',
    config: babel,
});
