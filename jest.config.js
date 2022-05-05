/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: "built/coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "__tests__/tsconfig.json",
    },
  },
};
