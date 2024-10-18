<script setup lang="ts">
import { nextTick, ref } from 'vue'
import useStore from '../store'
import { ITodoItem } from '../types/data'
const { main } = useStore()
const isEditing = ref(false)
const currentName = ref('')
const inputRef = ref<HTMLInputElement>()

const { deleteTodo, updateTodo } = main;

const handleChangeInput = (item: ITodoItem) => updateTodo(item.id, 'done', !item.done)
const handleDblClick = () => {
  isEditing.value = true
  currentName.value = props.item.name
  nextTick(() => inputRef.value?.focus())
}
const handleBlur = () => {
  isEditing.value = false
  currentName.value = ''
}
const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    handleBlur()
    return
  }
  if (e.key === 'Enter') {
    if (currentName.value.trim() === '') return alert('不能为空')
    updateTodo(props.item.id, 'name', currentName.value)
    handleBlur()
  }
}
const props = defineProps<{
  item: ITodoItem
}>()
</script>
<template>
  <li
    :class="{
      completed: item.done,
      editing: isEditing,
    }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.done" @change="handleChangeInput(item)" />
      <label @dblclick="handleDblClick">{{ item.name }}</label>
      <button class="destroy" @click="deleteTodo(item.id)"></button>
    </div>
    <input class="edit" ref="inputRef" @blur="handleBlur" v-model="currentName" @keyup="handleKeyUp" />
  </li>
</template>
