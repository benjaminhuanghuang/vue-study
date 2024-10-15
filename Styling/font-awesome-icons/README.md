

## Method 1: Using Font Awesome via CDN
```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
/>
```

Use icon
```html
    <i class="fas fa-home"></i> Home
```

## Method 2: Using Font Awesome with @fortawesome/vue-fontawesome
https://docs.fontawesome.com/web/use-with/vue/add-icons

This method allows you to import only the icons you need, which can help reduce the final bundle size. making it more efficient.

```sh
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/vue-fontawesome
```

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

// Add icons to the library
library.add(faHome, faUser, faTwitter);

// Create Vue app and register FontAwesomeIcon component globally
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');


<template>
  <div>
    <font-awesome-icon :icon="['fas', 'home']" /> Home
    <font-awesome-icon :icon="['fas', 'user']" /> User
    <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
  </div>
</template>
```