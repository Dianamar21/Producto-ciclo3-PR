<template>
  
  <div>
  
      <v-img
      lazy-src="../assets/banner_2.jpg"
      max-height="300"
      max-width="1400"
      src="../assets/banner_2.jpg"
    ></v-img>
      <!--ANTES: lazy-src="https://picsum.photos/id/11/10/6"-->
      
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
