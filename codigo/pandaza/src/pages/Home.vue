<template>
  
  <div>
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
