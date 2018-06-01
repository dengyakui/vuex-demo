import Vue from "vue"
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    a: moduleA
  },
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    increment: state => {
      debugger
      state.count++
    },
    decrement: state => {
      state.count--;
    }
  },
  actions: {
    increment(context){
      debugger
      setTimeout(() => {
        context.commit('increment')  
      }, 1000);
      //context.commit('increment')  
    },
    decrement({commit}){
      commit('decrement')
    }
  },
  getters: {
    doneTodosCount: state => {
      return state.todos.filter(todo => todo.done).length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})

export default store

