import * as index$1 from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
const index = {
  install: (app) => {
    for (const key of Object.keys(index$1)) {
      app.use(index$1[key]);
    }
  }
};
export {
  Button,
  index as default
};
