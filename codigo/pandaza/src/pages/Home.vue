<template>
  <div class="contenedor">
    <!--   BANNERRRRRRRRRRRRRRRRRRRRRRRRRRRR      -->

    <v-img
      class="imag"
      lazy-src="../assets/banner_2.jpg"
      max-height="300"
      max-width="1400"
      src="../assets/banner_2.jpg"
    ></v-img>
 
    <!--   DATOS DE TITULO ANTES DE CONSULTAR RECETA      -->
    <div class="al-centro">
      <h1>Bienvenido a Pandaza</h1>
      <p>El recetario colaborativo mas grande del mundo</p>
    </div>
    <!-- login -->
    <PandazaLogin/>
    <div class="">
     <ViewRecipe></ViewRecipe> 
    </div>
  </div>
</template>

<script>
import PandazaLogin from "../components/Login.vue";
import ViewRecipe from "../pages/ViewRecipe.vue";
export default {
  components: {
    
    PandazaLogin,
    ViewRecipe,
  },
};
</script>

<style scoped>
.contenedor{
     width: 100%;
      position: relative;
}

.al-centro{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.al-centro h1{
  font-size: 60px;
  color: rgb(255, 255, 255);
  font-family: cursive;
}
.imag {
  filter: blur(2px);
}.al-centro p{
font-size: 20px;
color: azure;
}
@media (min-width:320px) and (max-width: 479px) { 
.al-centro p{
font-size: 16px;
color: azure;
}
.al-centro h1{
  font-size: 60px;
  color: rgb(255, 255, 255);
  font-family: cursive;
}  
.al-centro{
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
}
}
</style>
