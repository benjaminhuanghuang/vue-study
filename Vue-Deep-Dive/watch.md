## What can be watch
- ref()
- reactive()
- getter()
- array  of ref, reactive, getter


vue3
```vue
<script setup lang="ts">
import { watch } from 'vue'
let sum = ref(0);

//watch('who', 'callback');
const stopWatch = watch(sum, (newVal, oldVla)=>{
  
  if(newVal >= 10) {
    stopWatch();
  }
})




</script>
```