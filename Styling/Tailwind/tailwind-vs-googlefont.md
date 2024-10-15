
Adding Google Fonts to public/index.html
```html
<!-- Add Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

Update your Tailwind configuration to use the Google Font:
```js
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Set Roboto as the default sans font
      },
    },
  },
  plugins: [],
};
```

Use the font
```html
<h1 class="font-sans text-3xl">Hello with Roboto!</h1>
```