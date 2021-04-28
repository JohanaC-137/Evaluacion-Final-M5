import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    el: '#home',
    data: {
        descripción: '',
        monto: '',
        formActualizar: false,
        idActualizar: -1,
        descripciónActualizar: '',
        montoActualizar: '',
        elementos: [] 
    },
    
    mutations: {
        guardar(state, index) {
        state.crearElemento; function() {
            this.elementos.push({
            id: + new Date(),
            descripción: this.descripción,
            monto: this.monto
            });
            this.descripción = '';
            this.monto = '';
            }
        },
    },
    
    borrar(state) {
      state.elementos.forEach(formulario => {
        formulario.cantidad = 0
      })
    }
  },
  
  
  actions: {
  },
  modules: {
  }
})
