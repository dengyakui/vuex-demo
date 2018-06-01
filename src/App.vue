<template>
  <div id="app">
   <p>count:{{count}}</p>
   <p>countFromA: {{stateA}}</p>
   <p>
     <button @click="incr">+</button>
     <button @click="decr">-</button>
     <button @click="incrementA">+A</button>
   </p>
   <p>
     done todos: {{doneCount}}
   </p>
     

   <p>id:1, todo is: {{getTodoById(1)}}</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    incr() {
      //this.$store.commit('increment')
      this.$store.dispatch('increment')
    },
    decr() {
      //this.$store.commit('decrement')
      this.$store.dispatch('decrement')
    },
    getTodoById(id) {
      return this.$store.getters.getTodoById(id)
    },
    incrementA(){
      
      this.$store.dispatch('increment')
    }
    
  },
  computed: {

    
    count() {
      return this.$store.state.count
    },
    ...mapState({
      stateA: state => state.a.countFromA
    }),
    ...mapGetters({
      doneCount: 'doneTodosCount'
    })
    // doneTodos() {
    //   return this.$store.getters.doneTodos.length
    // }
   
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
