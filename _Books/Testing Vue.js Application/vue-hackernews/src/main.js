import Vue from "vue";
import App from "./App";
import ProgressBar from "./components/ProgressBar";

// Tell Vue don't show the production tip in the console
Vue.config.productionTip = false;

const app = createApp(App);

/* 
  add a mounted ProgressBar component instance as a $bar instance property. 
  That way, each component in the app can start the ProgressBar by calling 
  $bar.start and stop the ProgressBar by calling $bar.finish.
*/
const bar = createApp(ProgressBar).mount(document.createElement('div'));
document.body.appendChild(bar.$el);
app.config.globalProperties.$bar = bar;
app.mount("#app");