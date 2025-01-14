<script setup lang="ts">
// Components
import { Button } from '@/components/ui/button'
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
      <Button @click="sheetOpen = false">Close</Button>
    </SheetContent>
  </Sheet>
</template>