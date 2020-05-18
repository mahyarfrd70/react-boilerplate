module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
