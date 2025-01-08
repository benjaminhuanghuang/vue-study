<script setup lang="ts">
import { ref } from 'vue'

import DataTable from '@/components/ui/data-table/DataTable.vue'
import { RouterLink } from 'vue-router'
import { usePageStore } from '@/stores/page';
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects';

const projects = ref<Projects | null>(null)
const getProjects = async () => {
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  projects.value = data

  console.log('projects: ', projects.value)
}

await getProjects();

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