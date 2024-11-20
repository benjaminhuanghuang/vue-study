import { defineStore } from "pinia";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    notes: [],
    lastNoteID: "",
  }),
  getters: {
    allNotes: (state) => {
      return state.notes;
    },

    pinnedNotes: (state) => {
      return state.notes.filter((note) => note.pinned);
    },
  },
  actions: {
    addNote(note) {
      const newNotesArr = [note, ...this.notes];
      this.notes = newNotesArr;
    },

    markedAsPinned(id) {
      const updateNotes = this.notes.map((item) => {
        if (id === item.id) {
          item.pinned = true;
          return item;
        }

        return item;
      });

      this.notes = updateNotes;
    },

    markedAsUnPinned(id) {
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
