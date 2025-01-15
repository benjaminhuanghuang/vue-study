import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (const key of Object.keys(components)) {
      app.use(components[key as keyof typeof components]);
    }
  },
};
