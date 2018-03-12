/**
 * This file is managed by sanejs
 *
 * source: @sanejs/preset-jest
 * namespace: wallaby
 *
 * DO NOT MODIFY
 */

/* eslint-disable import/no-extraneous-dependencies */

'use strict';

const Sanejs = require('@sanejs/core');

const { configManager } = new Sanejs();

const wallaby = (wallabyConfig) => {
    /**
     * Needed for monorepo
     */
    process.env.NODE_PATH = require('path').join(
        wallabyConfig.localProjectDir,
        '../../node_modules'
    );

    return configManager({
        namespace: 'wallaby',
        config: {
            files: [
                { pattern: 'src/**/__sandbox__/**/*', instrument: false },
                { pattern: 'src/**/__sandbox__/**/.*', instrument: false },
                { pattern: '.babelrc+(.js|)', instrument: false },
                'src/**/*.js',
                'jest.config.js',
                '.env',
                'src/**/*.snap',
                '!src/**/*.test.js',
            ],

            tests: ['src/**/*.test.js'],

            compilers: {
                '**/*.js': wallabyConfig.compilers.babel(),
            },

            hints: {
                ignoreCoverage: /ignore coverage/,
            },

            env: {
                type: 'node',
                runner: 'node',
            },

            testFramework: 'jest',

            setup: (setupConfig) => {
                /**
                 * Set to project local path so sanejs can correctly resolve modules
                 * https://github.com/wallabyjs/public/issues/1552#issuecomment-372002860
                 */
                process.chdir(setupConfig.localProjectDir);

                require('babel-polyfill');
                process.env.NODE_ENV = 'test';
                const jestConfig = require('./jest.config');
                jestConfig.transform = {
                    '__sandbox__.+\\.jsx?$': 'babel-jest',
                };
                setupConfig.testFramework.configure(jestConfig);

                /**
                 * https://github.com/wallabyjs/public/issues/1268#issuecomment-323237993
                 *
                 * reset to expected wallaby process.cwd
                 */
                process.chdir(setupConfig.projectCacheDir);
            },
        },
    });
};

module.exports = wallaby;
