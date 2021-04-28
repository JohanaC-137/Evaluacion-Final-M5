<template>
<div class="contenedor">
    <div id="app" class="container">
        <section class="form">
            <form action="" class="text-center p-4">
                <div class="input-group">
                       
                            <input v-model="descripción" @keyup.enter="crearElemento" type="text" class="form-control" placeholder="Descripción">
                            <input v-model="monto" @keyup.enter="crearElemento" type="number" name="monto" placeholder="Monto" class="form-control"><hr>
                            <input @click="crearElemento" type="button" value="Agregar" class="btn btn-info">        
               
                </div> 
            </form>
        </section>
        <section class="data">
            <caption>Elementos</caption>
            <table class="table">
                <thead>
                    <tr>   
                        <th scope="col">Descripción</th>
                        <th scope="col">Monto</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(elemento, index) in elementos">
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <input v-model="descripciónActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                {{ elemento.descripción }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <input v-model="montoActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                {{ elemento.monto }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-info">Guardar</button>
                            </span>
                            <span v-else>
                                <button @click="verFormActualizar(index)" class="btn">Actualizar</button>
                                <button @click="borrarElemento(index)" class="btn">Borrar</button> 
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</div>


<!--<script>
import {mapState, mapMutations} from 'vuex';


export default {
  name: 'venta',
  computed:{
      ...mapState(['venta'])
  },
  methods:{
      ...mapMutations(['guardar','actualizar','borrar'])
  }
}
</script>














   <div>
        <ul class="list-group">
            
            <li v-for="(item, index) of listas" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{item.nombre}}
            <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-primary" @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';


export default {
  name: 'Lista',
  computed:{
      ...mapState(['listas'])
  },
  methods:{
      ...mapMutations(['aumentar','reiniciar'])
  }
}
</script>-->