import { defineStore } from "pinia";
import { Note } from "@/types/Note";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    notes: [] as Note[],
    lastNoteID: "",
  }),
  getters: {
    allNotes: (state) => {
      return state.notes;
    },

    pinnedNotes: (state) => {
      return state.notes.filter((note: Note) => note.pinned);
    },
  },
  actions: {
    addNote(note: Note) {
      const newNotesArr = [note, ...this.notes];
      this.notes = newNotesArr;
    },

    markedAsPinned(id: string) {
      const updateNotes = this.notes.map((item) => {
        if (id === item.id) {
          item.pinned = true;
          return item;
        }

        return item;
      });

      this.notes = updateNotes;
    },

    markedAsUnPinned(id: string) {
      const updateNotes = this.notes.map((item) => {
        if (id === item.id) {
          item.pinned = false;
          return item;
        }

        return item;
      });

      this.notes = updateNotes;
    },
  },
});
