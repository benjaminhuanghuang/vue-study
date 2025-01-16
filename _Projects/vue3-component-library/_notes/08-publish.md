# Component Library Release

execute 'pnpm init' under 'stellarnovaui' to generate package.json.

```json
{
  "name": "stellarnovaui",
  "version": "1.0.0",
  "main": "lib/index.js",
  "module": "es/index.mjs",
  "files": ["es", "lib"],
  "keywords": ["stellarnovaui", "vue3 Component Library"],
  "sideEffects": ["**/*.css"],
  "author": "",
  "license": "MIT",
  "description": "",
  "typings": "lib/index.d.ts"
}
```

## Automate versioning and package publishing

```sh
    pnpm add release-it -D -w
```

Create index.ts file in the packages/components/script/publish directory for the publishing task.

```js
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/stellarnovaui`);
};
export default series(async () => publishComponent());
```

Add a new scripts command in the package.json file at the root directory to execute publish/index.ts using gulp.

```json

"scripts": {
    "build:stellarnovaui": "gulp -f packages/components/script/build/index.ts",
    "publish:stellarnovaui": "gulp -f packages/components/script/publish/index.ts"
},
```
