module.exports = {
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
