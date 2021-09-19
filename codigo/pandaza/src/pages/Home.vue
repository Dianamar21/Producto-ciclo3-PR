<template>
  
  <div>
  
      <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="300"
      max-width="1400"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>
      
      <br>
  
  <!--   DATOS DE TITULO ANTES DE CONSULTAR RECETA      -->
    <h1>Bienvenido a Pandaza</h1>
    <h4>El recetario colaborativo mas grande del mundo</h4>
    <recipeConsult></recipeConsult>
  </div> 

</template>



<script>

import recipeConsult from '../components/recipeConsult.vue'

export default {
  components: {
    recipeConsult
  },
};
</script>
