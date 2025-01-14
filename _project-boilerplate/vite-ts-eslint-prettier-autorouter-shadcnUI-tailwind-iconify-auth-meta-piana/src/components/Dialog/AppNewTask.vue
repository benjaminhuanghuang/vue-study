<script setup lang="ts">
import { defineModel } from 'vue'

import { Sheet, SheetContent, SheetHeader, SheetTitle} from '@/components/ui/sheet'

const sheetOpen = defineModel<boolean>()

</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create new task</SheetTitle>
      </SheetHeader>

      <h1>Add new task</h1>
      <button @click="sheetOpen = false">Close</button>
    </SheetContent>
  </Sheet>
</template>