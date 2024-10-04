# Guide to Unit Testing Vue Components
https://testdriven.io/blog/vue-unit-testing/
https://gitlab.com/patkennedy79/vue-weather-app

## Dependencies:
- Vue 3 with the Composition API - JavaScript framework
- Vite - Tooling for Vue development
- Vitest - Unit test framework
- Vue Test Utils - test utility library for Vue
- Node - JavaScript runtime

## Test Helpers
While the checks in the unit test file for the WeatherHeader component are only checking string values, there are [lots of options available from Vitest to perform checks:

Booleans:
toBeTruthy() - checks that a variable/statement is true
toBeFalsy() - checks that a variable/statement is false
Defined:
toBeNull() - checks if a variable matches only null
toBeUndefined() - checks if a variable is not defined
toBeDefined() - checks if a variable is defined

Numbers:
toBeGreaterThan() - checks if a number is greater than the value specified
toBeGreaterThanOrEqual() - checks if a number is greater than or equal to the value specified
toBeLessThan() - checks if a number is less than the value specified
toBeLessThanOrEqual() - checks if a number is less than or equal to the value specified
toBe() and toEqual() - checks if a number is the same as the value specified (these functions are equivalent for numbers)
toBeCloseTo() - checks if a number is equal to the value specified within a small tolerance (useful for floating-point numbers)

Strings:
toMatch() - checks if a string is equal to the value specified (Regex can be used as the value specified!)

Arrays:
toContain() - checks if an array contains the specified value
Additionally, the not qualifier can be used with most of these checks: