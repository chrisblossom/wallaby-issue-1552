/**
 * This file is managed by sanejs
 *
 * source: @sanejs/preset-jest
 * namespace: jest
 *
 * DO NOT MODIFY
 */

'use strict';

const Sanejs = require('@sanejs/core');

const { configManager } = new Sanejs();

/**
 * https://facebook.github.io/jest/docs/configuration.html#options
 */
const jest = {
    rootDir: 'src',
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'node',
    collectCoverage: false,
    coveragePathIgnorePatterns: ['/__sandbox__/'],

    /**
     * Automatically reset mock state between every test.
     * Equivalent to calling jest.resetAllMocks() between each test.
     *
     * Sane default with resetModules: true because mocks need to be inside beforeEach
     * for them to work correctly
     */
    resetMocks: true,

    /**
     *  The module registry for every test file will be reset before running each individual test.
     *  This is useful to isolate modules for every test so that local module state doesn't conflict between tests.
     */
    resetModules: true,
};

module.exports = configManager({
    namespace: 'jest',
    config: jest,
});
