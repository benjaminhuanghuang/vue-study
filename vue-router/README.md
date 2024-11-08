# Vue Router

When a single-page web app grows large, you might decide to split the UI into different views. 
You can use Vue Router to add client-side routing to handle navigation between views `without causing a page reload`.

routing means using the path of a URL to serve content.



```sh
npm i vue-router 

```

```js
import { RouterView } from "vue-router";


<template>
    <div>
        <SiteNavigation>
        <RouterView>
    </div>

</template>
```


```js
<RouterLink :to="{ name: 'home' }">
    <div class="flex items-center gap-3">
        <i class="fa-solid fa-sun text-2xl"></i>
        <p class="text-2xl">The Local Weather</p>
    </div>
</RouterLink>

import {RouterLink} from 'vue-router'
```