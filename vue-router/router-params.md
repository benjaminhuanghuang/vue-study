


## Define the router
```js
routes: [
    {
      path: "/weather/:state/:city",
      name: "cityView",
      component: CityView,
      meta: {
        title: "Weather",
      },
    },
]
```

## Jump to a url
```js
  const router = useRouter();
  const previewCity = (searchResult) => {
    const [city, state] = searchResult.place_name.split(",");
    router.push({
      name: "cityView",
      params: { state: state.replaceAll(" ", ""), city: city },
      query: {
        lat: searchResult.geometry.coordinates[1],
        lng: searchResult.geometry.coordinates[0],
        preview: true,
      },
    });
  };
  ```