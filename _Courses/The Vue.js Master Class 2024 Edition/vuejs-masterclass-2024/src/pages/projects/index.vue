<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { RouterLink } from 'vue-router'
import { usePageStore } from '@/stores/page';
import { columns } from '@/utils/tableColumns/projectsColumns'
import { useProjectsStore } from '@/stores/loaders/projects';
import { storeToRefs } from 'pinia';

usePageStore().pageData.title = 'Projects';

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader

await getProjects();
const { getGroupedCollabs, groupedCollabs } = useCollabs()

getGroupedCollabs(projects.value ?? [])

const columnsWithCollabs = columns(groupedCollabs)

useMeta({
  title: 'Projects | Pulse',
  description: {
    name: 'description',
    content: 'See all projects in Pulse.'
  }
})
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects">
    <template #cell-name="{ cell }">
      <RouterLink :to="`/projects/${cell.row.original.slug}`" class="text-left font-medium hover:bg-muted block w-full">
        {{ cell.getValue() }}
      </RouterLink>
    </template>
  </DataTable>
</template>