
1.可定制

在tailwind.config.js配置文件中，可以自定义项目的调色板color、间距spacing、字体fontFamily、断点breakpoints、边框半径值borderRadius等。

2. 响应式
Tailwind提供了断点breakpoints供用户根据不同的设备配置响应式布局，默认断点为常见设备的分辨率
```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
```
3.提取共用属性
也许你会觉得在标签上写那么多class看起来太乱了，这个时候你可以使用特殊语法@apply将属性提取出来，例如提取刚才的div中的class
```css
/* index.css */

/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;

.box {
  @apply w-20 h-20 bg-red-200 sm:bg-blue-500 md:bg-yellow-500
}
```