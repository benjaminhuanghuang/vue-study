# Hash vs HTML5 vs Memory

```js
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
});
```

- Hash

```js
<a href="#/index">Home</a>
<a href="#/about">About</a>

<div class='home'></div>
<div class='about'></div>

widow.onhashchange = (event) => {
    const newULR = event.newURL.split('#')[1];
    const oldULR = event.oldURL.split('#')[1];

    cont newPage = document.querySelector('.'+newURL);
    cont oldPage = document.querySelector('.'+oleURL);

    newPage.style.display = 'block';
    oldPage.style.display = 'none';
}

```

hash character (#) before the actual URL that is internally passed.
Because this section of the URL is `never sent to the server`, it doesn't require any special treatment on the server level.

- HTML5

```js
<a href="javascript:jump('/index')"> Home </a>;

function jump(path) {
  history.pushState(null, "page", path);
  const pages = document.querySelectorAll(".page");
  const newPage = document.querySelector(page.replace("/", "."));
  pages.forEach((p) => (p.style.display = "none"));
  newPage.style.display = "block";
}
```

The ulr in browser looks like "127.0.0.1:8888/the-path"

Will get 404 error when refresh the page, because browse will request a non-existing page "the-path" on server.
To fix the issue, all you need to do is add a simple catch-all fallback route to your server. If the URL doesn't match any static assets, it should serve the same

- Memory
  won't be able to go back or forward.

## Reference

Different History modes
https://router.vuejs.org/guide/essentials/history-mode.html
