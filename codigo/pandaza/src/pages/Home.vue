<template>
  
  <div>
  
      <div>
        <v-btn elevation="2" bottom right fixed fab >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <div class="text-center">
    <v-dialog v-model="dialog" width="600">
    <template  v-slot:activator="{ on, attrs }">
      <v-btn bottom right fixed fab color="red lighten-2" dark v-bind="attrs" v-on="on">
        <b>Login</b>
      </v-btn>
    </template>
<!--FORMULARIO-->
    <form action="" @submit.prevent="login">
      <div class="card bg-login">
        <div class="card-header m-4 bg- text-white">
          <h1><b>Iniciar Sesion</b></h1>
        </div>
        
        <div class="card-body">
            <div class="m-4">
                <input class="form-control" type="email" v-model="correo"  placeholder="Correo">
            </div>
            <div class="m-4">
                <input class="form-control" type="password" v-model="password" placeholder="Contraseña" >
            </div>
          <v-spacer></v-spacer>
          <div class="mb-3">
            <button class="btn btn-primary"><b>Login</b></button>
            <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
          </div>
        </div>
            <router-link to="/recipe/register" >  Aun no eres miembro ? registrate</router-link>
            
      </div>
    </form>
    </v-dialog>
  </div>
 <!--   BANNERRRRRRRRRRRRRRRRRRRRRRRRRRRR      -->
          <v-img
          lazy-src="../assets/banner_2.jpg"
          max-height="300"
          max-width="1400"
          src="../assets/banner_2.jpg">
          </v-img>
          <!--ANTES:src="https://picsum.photos/id/11/500/300"-->
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
  },data:()=> ({
      correo: "",
      password: "",
      error : false
  }),
  
   
};
</script>
<style scoped>
.bg-login{
    background-image: url('../assets/banner-login.jpg') ;
    background-size: cover;
    background-position: center;
    
}
</style>

