
```js
<template>
  <zm-dialog ref="dialog">
</template>


<script>
mounted() {
    // Access the element via ref
    const dlgElement = this.$refs.dialog.$el.children[0];
    // Create the ResizeObserver and update location of dialog
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const dialogHeight = entry.contentRect.height;
        let styleTop = parseFloat(getComputedStyle(dlgElement).top);
        if (styleTop + dialogHeight / 2 > window.innerHeight) {
          styleTop = dialogHeight / 2;
        }
        if (styleTop - dialogHeight / 2 < 0) {
          styleTop = dialogHeight / 2;
        }
        dlgElement.style.top = `${styleTop}px`;
      }
    });

    // Start observing the element
    this.resizeObserver.observe(dlgElement);
  },
  beforeDestroy() {
    // Disconnect the observer to prevent memory leaks
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },

</script>
  ```