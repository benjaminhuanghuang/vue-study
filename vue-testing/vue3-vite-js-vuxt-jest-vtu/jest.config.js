export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Specifies the test environment
  testEnvironment: "jsdom",

  // A list of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "json", "vue"],

  // Transform files before testing (e.g., using vue-jest and babel-jest)
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.[t|j]sx?$": "babel-jest",
  },

  // Mocking static assets (e.g., CSS files, images)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Collect code coverage
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js", // Exclude main.js
    "!src/router/index.js", // Exclude router
  ],
  coverageDirectory: "<rootDir>/coverage",

  // Test files to include
  testMatch: [
    "**/tests/**/*.spec.[jt]s?(x)",
    "**/__tests__/*.[jt]s?(x)",
    "**/*.spec.[jt]s?(x)",
  ],

  // Set up files before tests
  //setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],

  // Enable verbose logging of tests
  verbose: true,

  // Fix error jest ReferenceError: Vue is not defined
  // For vue-test-utils to work with Jest 29
  // https://test-utils.vuejs.org/migration/#test-runners-upgrade-notes
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
