import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listas: [
      { nombre: 'producto 1', cantidad: 0 },
      { nombre: 'producto 2', cantidad: 0 },
    ]
  },
  mutations: {
    aumentar(state, index) {
      state.listas [index].cantidad ++
    },
    reiniciar(state) {
      state.listas.forEach(formulario => {
        formulario.cantidad = 0
      })
    }
  },
  
  
  actions: {
  },
  modules: {
  }
})
