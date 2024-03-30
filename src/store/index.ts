import { createStore } from 'vuex'

export default createStore({
  state: {
    articles: [
      {
        title: "Title 1",
        completed: false
      },
      {
        title: "Title 2",
        completed: true
      },
      {
        title: "Title 3",
        completed: false
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
