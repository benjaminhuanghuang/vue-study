/*
Sometimes, when we use components, we want to directly use app.use() to mount the entire component library. 
When using app.use(), it actually calls the install method of the passed parameter. 
Therefore, we first add an install method to each component, and then export the entire component library. 
*/

import _Button from "./button.vue";
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    // register component
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
export const Button = withInstall(_Button);
export default Button;
