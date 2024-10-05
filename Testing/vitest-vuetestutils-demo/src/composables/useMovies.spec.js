import { useMovies } from "./useMovies";
import { createApp } from "vue";
import { flushPromises } from "@vue/test-utils";

// 1. Mock global.fetch with vi.fn()
global.fetch = vi.fn();

// 2. Mock returned value from fetch
function createMockResponse(data) {
  return {
    json: () => Promise((resolve) => resolve(data)),
    ok: true,
  };
}

// 3. Mont test app with createApp()
// 4. Trigger useMovies in setup
function withSetup(hook) {
    let result;
    const app = createApp({ setup() { result = hook(); } });
    app.mount(document.createElement("div"));
}


describe("useMovies", () => {
  beforeAll(() => {
    fetch.mockReturnValue(createMockResponse({
        results:[
            {
                title: 'A New Hope'
            }
        ]
    }));
  });

  it("should fetch movies", async () => {
    // return & assert results
    const [results, app] = withSetup(useMovies);

    // Flush all asynchronous calls with flushPromises from @vue/test-utils
    await flushPromises();
    
    expect(results.movies.value.length).toEqual(1);

    app.unmount()
  });
});
