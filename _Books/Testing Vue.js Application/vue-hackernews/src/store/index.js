import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import { createStore } from 'vuex';

// Define your state, mutations, actions, and getters
const store = createStore({
  state: {
    item: null,
    items: [],
    comments: {},
    user: null
  },
  mutations,
  actions,
  getters,
});

export default store;
