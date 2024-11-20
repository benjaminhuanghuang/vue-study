<script setup>
import ListItem from '../partials/ListItem.vue';
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
</script>

<template>
	<div class="rs__notes-sidebar">
		<ListItem
			:notes="noteStore.pinnedNotes"
			:title="`Pinned Notes`"
			:icon="`push_pin`"
			:type="`list`"
		/>
		<ListItem
			:notes="noteStore.allNotes"
			:title="`All Notes`"
			:icon="`notes`"
			:type="`list`"
		/>
	</div>
</template>