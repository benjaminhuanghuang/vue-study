nuxt.config.js

```
head: {
    title: 'vue-screencasts-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
```

in pages
```
    {
        head: {
            title: "Vue title"
        }

    }
```

or
```
{
    head() {
        return {
            title: `${this.vidio.name}`
        }
    }

}
```