import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'

Vue.config.productionTip = false

export const actions = new Vue({})

export const master = new Vue({
  methods: {
    d20(){
      return this.rowDice(1, 20)
    },
    d12(){
      return this.rowDice(1, 12)
    },
    d10(){
      return this.rowDice(1, 10)
    },
    d8(){
      return this.rowDice(1, 8)
    },
    d6(){
      return this.rowDice(1, 6)
    },
    d4(){
      return this.rowDice(1, 4)
    },
    d3(){
      return this.rowDice(1, 3)
    },
    d2(){
      return this.rowDice(1, 2)
    },
    rowDice(min, max) {
      return Math.floor(Math.random() * ((max+1) - min)) + min
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
