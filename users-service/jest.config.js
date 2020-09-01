module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: { "\\.ts$": ["ts-jest"] },
  moduleNameMapper: {
    "^@controllers(.*)$": "<rootDir>/src/controllers$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@models(.*)$": "<rootDir>/src/models$1",
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@validators(.*)$": "<rootDir>/src/validators$1",
    "^@factories(.*)$": "<rootDir>/src/factories$1",
    "^@types(.*)$": "<rootDir>/src/types$1",
  },
  setupFiles: ["<rootDir>/setup-tests.ts"],
};
