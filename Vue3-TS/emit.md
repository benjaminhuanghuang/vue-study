

```ts
<script setup lang="ts">
const emit = defineEmits<{
  (event: 'update', value: string): void;
  (event: 'delete', id: number): void;
}>();

emit('update', 'New Value');
emit('delete', 123);
</script>
```