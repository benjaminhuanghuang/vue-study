/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  preset: "ts-jest",
  // Jest can simulate the DOM using jsdom
  testEnvironment: "jsdom",
  // Tells Jest to process .vue files using vue-jest
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.ts$": "ts-jest", // If you're using TypeScript
  },
  // Optionally, configure which files to ignore
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: [
      "js",
      "ts",
      "json",
      // tell Jest to handle `*.vue` files
      "vue"
    ],

  // Specify where to look for test files
  testMatch: ["**/tests/**/*.spec.[jt]s?(x)", "**/__tests__/*.[jt]s?(x)", "**/*.spec.[jt]s?(x)"],

  // Optional, you can add moduleNameMapper to handle imports of static assets
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // For CSS imports
  },

  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  coverageReporters: ["text", "json-summary"],
  // Fix in order for vue-test-utils to work with Jest 29
  // https://test-utils.vuejs.org/migration/#test-runners-upgrade-notes
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
