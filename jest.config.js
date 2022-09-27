/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"], //tell jest where to find the test
  verbose: true,
  forceExit: true,
  //clearMocks: true
};