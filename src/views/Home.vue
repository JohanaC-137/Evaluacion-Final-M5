<template>
  <div class="home">
    <Cabecera></Cabecera>
    <Lista></Lista>
    <Formulario></Formulario>
  </div>
</template>

<script>
// @ is an alias to /src
import Cabecera from '@/components/Cabecera.vue'
import Lista from '@/components/Lista.vue'
import Formulario from '@/components/Formulario.vue'

//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Cabecera,
    Lista,
    Formulario
  }
}
</script>
