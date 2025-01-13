# Teleport

A dialog is rendered in the DOM tree deeply nested. 

Using teleport to tell Vue where the content should be mount.

```html
<template >
<teleport to="body">
    <dialog>
</teleport>
</template>
```