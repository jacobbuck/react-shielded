module.exports = {
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'regenerator-runtime'],
};
