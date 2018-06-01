 const moduleA = {
  state: {
    countFromA : 100
  },
  mutations: {
    increment(state){
      debugger
      state.countFromA++
    },
    decrement(state) {
      state.countFromA--
    }
  },
  actions: {
    increment(context){
      debugger
      context.commit('increment')
    },
    decrement({commit}) {
      commit('decrement')
    }
  },
  getters: {
    doubleA(state){
      return state.count * 2
    },
    sumWithRootCount(state, getters, rootState){
      return state + rootState.count
    }
  }

}

export default moduleA