<template>

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
</script>