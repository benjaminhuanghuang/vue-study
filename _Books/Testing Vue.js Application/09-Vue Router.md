# Understanding Vue Router

- Understanding client-side routing
- Understanding Vue Router
- Adding Vue Router to a project

When a single-page web app grows large, you might decide to split the UI into different
views. You can use Vue Router to add client-side routing to handle navigation
between views without causing a page reload.

routing means using the path of a URL to serve content.

- In server-side routing, a new page/content is requested from the server and rendered. Server-side routing does have one big problem: each time a browser loads a new document, it loses the current state of the application.


- In client-side routing, the page content is rendered on the client, without a new request to the server.
The router changes the URL without causing a page reload, and the page contents
are rerendered with the show feed (figure 9.3). The point here is that the page
content updates, but the page maintains the same state.

Vue Router matches the path of a URL to a component that it should render. You
configure the paths that Vue Router should match with a route config objects array.

By default, a RouterLink component renders as an <a> element. When the element
is clicked, Vue Router prevents the browser from reloading the page, updates the
URL, and rerenders the RouterView.

## dynamic route matching
```js
const routes = [
{ path: '/item/:id', component: ItemView }
{ path: '/:type(top|new)/:page?', component: ItemView }    //{type: 'new'|'top', page: '123'}
]

<template>
    <p>The ID is {{$route.params.id}}</p>
</template>
```
