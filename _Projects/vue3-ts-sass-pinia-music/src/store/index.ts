import { defineStore } from "pinia";
import http from "../http";
import { ISong } from "../models";

export const useStore = defineStore({
  id: "main",
  state() {
    return {
      audio: new Audio(),
      isPlaying: false as boolean,
    };
  },
  actions: {
    async play(id: number) {
      const { data } = await http.request<{ data: { data: ISong[] } }>(
        "get",
        `/song/url?id=${id}`
      );
      this.audio.src = data.data[0].url;
      this.audio.play().then(() => {
        this.isPlaying = true;
      });
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
  },
});
