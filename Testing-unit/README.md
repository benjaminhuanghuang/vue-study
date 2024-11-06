# Vue Testing
https://vuejs.org/guide/scaling-up/testing.html



## Tests can be considered at three levels
- unit testing: 将应用拆分为细小的组件（JS 中的一个函数/对象/模块等）方法，然后针对这些方法进行单独的测试工作；
- integration testing: 是针对产品的某个功能的测试，又称功能测试；
- e2e testing: 模拟用户进行页面操作，通过判断页面状态的变化来检查功能是否运行正常，需要用到浏览器环境。 


## What to Test
There are three types of testing to consider with unit testing:
- Implementation details: the underlying business logic that a component uses to produce a result based on a given input
- Public interface/design contract: specific inputs (or props, in this case) produce specific results
- Side effects: "if this, then that"; e.g. when a button is clicked something happens


Focus on testing inputs and outputs that the end user will interact with. The experience that the users of your product have is paramount!

Inputs: data, props, user interaction, lifecycle methods, data store (Pinia/Vuex), route params, query strings

Outputs: rendered output, events, data results, data store (Pinia/Vuex) updates, dispatches


## Tools
### Vitest
Command-line tool to run the tests and check the test coverage
User interface to visually see test results and coverage results
Functions for writing unit tests (it, describe)
Functions for checking against expected values (expect, toMatch, toContain, etc.)
Mocking (mockResolvedValue, mockRejectedValue)
Setup (beforeEach, beforeAll) / Teardown (afterEach, afterAll)

```sh
"test:unit": "vitest run --environment jsdom",
```

### Vue Test Utils
Mounting components (mount, shallowMount)
Setting props data (setProps)
Finding HTML components for testing (findAll('h2'))
Utility for flushing all Promises (flushPromises())
Utility for triggering click events (trigger)
Utility for checking emitted events (emitted)

