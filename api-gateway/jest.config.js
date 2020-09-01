module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: { "\\.ts$": ["ts-jest"] },
  moduleNameMapper: {
    "^@adapters(.*)$": "<rootDir>/src/adapters$1",
    "^@server(.*)$": "<rootDir>/src/server$1",
    "^@graphql(.*)$": "<rootDir>/src/graphql$1",
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@types(.*)$": "<rootDir>/src/types$1",
  },
  setupFiles: ["<rootDir>/setup-tests.ts"],
};
