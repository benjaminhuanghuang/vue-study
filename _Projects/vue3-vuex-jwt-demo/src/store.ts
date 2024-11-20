// src/store/index.js
import { createStore, ActionContext } from "vuex";
import axios from "axios";
import { User } from "./types";

interface State {
  user: User;
}

// Vuex store definition
const store = createStore<State>({
  state: {
    // Global state
    count: 0,
  },
  mutations: {
    SET_USER_DATA(state: State, userData: User) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA(state: State, userData: User) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
  },
  actions: {
    register(
      { commit }: ActionContext<State, State>,
      credentials: {name:string, email: string; password: string }
    ) {
      return axios
        .post("//localhost:3000/register", credentials)
        .then(({ data }) => {
          console.log("use data is", data);
          commit("SET_USER_DATA", data);
        });
    },

    login(
      { commit }: ActionContext<State, State>,
      credentials: { email: string; password: string }
    ) {
      return axios
        .post("//localhost:3000/login", credentials)
        .then(({ data }) => {
          console.log("use data is", data);
          commit("SET_USER_DATA", data);
        });
    },
    logout({ commit }: ActionContext<State, State>) {
      commit("CLEAR_USER_DATA");
    }
  },
  getters:{
    loggedIn(state: State) {
      return !!state.user;
    },
  }
});

export default store;
