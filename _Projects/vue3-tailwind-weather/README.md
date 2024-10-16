# Weather App Build (Vue 3 & Tailwind)

Vue3, Tailwind, OpenWeather API, OpenBox API

https://www.youtube.com/watch?v=gUsBaB5ViAo&list=PL4cUxeGkcC9hfoy8vFQ5tbXO3vY0xhhUZ

https://openweathermap.org/api

https://github.com/johnkomarnicki/net_ninja_vue_3_weather_app


 

## Setup
```
npm init vite@latest vue3-weather-app

npm i vue-router
```

## Setup tailwind
```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
# Modify tailwind.config.js
# Modify postcss.config.js
# Create ./src/index.css
# include index.css in main.js
```

## Font and icon

```html
<link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      rel="stylesheet"
/>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
/>

```
## Nav and router


## Dialog
event


### Teleport component
Teleport component to another DOM level

```js
<Teleport to ='body'>
</Teleport>
```


## Geocoding mapbox API 
```js

<input
    type="text"
    v-model="searchQuery"
    @input="getSearchResults"/>

const searchQuery = ref("");
const queryTimeout = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);  //debounce
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
      } catch {
        searchError.value = true;
      }

      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
```

## 7. Route with Params

```
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


## 8. Async Data with Vue Suspense


## 15. Deploy to Netlify



