import { defineStore } from "pinia";

import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
    }),
    getters: {
        user: (state) => state.authUser,
    },
    actions: {
        async login(email: string, password: string) {
            const response = await axios.post("/api/auth/login", { email, password });
            this.authUser = response.data;
        },
        async logout() {
            await axios.post("/api/auth/logout");
            this.authUser = null;
        },
    },
})