# Weather App Build (Vue 3 & Tailwind)
https://www.youtube.com/watch?v=gUsBaB5ViAo&list=PL4cUxeGkcC9hfoy8vFQ5tbXO3vY0xhhUZ

https://openweathermap.org/api

https://github.com/johnkomarnicki/net_ninja_vue_3_weather_app

## Setup
```
npm init vite@latest vue3-weather-app

npm i vue-router
```

## Setup tailwind
```
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


## Dialog
event


## Teleport component
Teleport component to another DOM level

```js
<Teleport to ='body'>
</Teleport>
```


## Geocoding API
