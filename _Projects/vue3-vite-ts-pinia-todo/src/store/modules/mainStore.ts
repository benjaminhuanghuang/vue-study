import { defineStore } from "pinia";
import request from "../../utils/request";
import { ITodoItem } from "../../types/data";
import footerStore from "./footerStore";

interface MainState {
  list: ITodoItem[];
}

interface MainGetters {
  mainRadioStatus: (state: MainState) => boolean;
  completed: (state: MainState) => ITodoItem[];
  unCompleted: (state: MainState) => ITodoItem[];
  renderList: (state: MainState) => ITodoItem[];
}

interface MainActions {
  getTodos: () => void;
  addTodo: (name: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, key: string, value: boolean | string) => void;
  updateAllStatus: (done: boolean) => void;
  clearCompleted: () => void;
}

const mainStore = defineStore("footerMain", {
  state: () => {
    return {
      list: [] as ITodoItem[],
    }
  },
  getters: {
    mainRadioStatus(state: MainState) {
      return state.list.every((item) => item.done);
    },
    completed(state: MainState) {
      return state.list.filter((item) => item.done);
    },
    unCompleted(state: MainState) {
      return state.list.filter((item) => !item.done);
    },
    renderList(state: MainState) {
      const active = footerStore().active;
      if (active === "Active") {
        return state.list.filter((item) => !item.done);
      }
      if (active === "Completed") {
        return state.list.filter((item) => item.done);
      }
      return state.list;
    },
  },
  actions: {
    async getTodos() {
      const { data } = await request.get<ITodoItem[]>("/");
      this.list = data;
    },
    async updateTodo(id: number, key: string, value: boolean | string) {
      await request.patch(`/${id}`, {
        [key]: value,
      });
      this.getTodos();
    },
    async addTodo(name: string) {
      await request.post("/", {
        name,
        done: false,
      });
      this.getTodos();
    },
    async updateAllStatus(done: boolean) {
      const arrPromise = this.list.map((item) => {
        return this.updateTodo(item.id, "done", done);
      });
      await Promise.all(arrPromise);
      this.getTodos();
    },
    async deleteTodo(id: number) {
      await request.delete(`/${id}`);
      this.getTodos();
    },
    async clearCompleted() {
      const arrPromise = this.completed.map((item) => {
        return request.delete(`/${item.id}`);
      });
      await Promise.all(arrPromise);
      this.getTodos();
    },
  },
});

export default mainStore;
