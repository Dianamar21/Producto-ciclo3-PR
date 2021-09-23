<template>
  <!--BOTON LOGIN MODAL-->
  <div>
    <v-btn elevation="2" bottom right fixed fab >
    <v-icon>mdi-plus</v-icon>
    </v-btn>
  <div>
<!--FINAL BOTON LOGIN MODAL-->
<!--LOGIN MODAL-->
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
    <template  v-slot:activator="{ on, attrs }">
      <v-btn bottom right fixed fab color="red lighten-2" dark v-bind="attrs" v-on="on">
        <b>Login</b>
      </v-btn>
    </template>
    <form action="" @submit.prevent="login">
      <div class="card bg-login">
        <div class="card-header m-4 bg- text-white">
          <h1><b>Login</b></h1>
        </div>
        
        <div class="card-body">
            <div class="m-4">
                <input class="form-control" type="email" v-model="correo"  placeholder="Correo">
            </div>
            <div class="m-4">
                <input class="form-control" type="password" v-model="password" placeholder="Contraseña" >
            </div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" > <b>Login</b></v-btn>
        </v-card-actions>
            <a href="">Aun no eres miembro ? registrate</a>
      </div>
    </form>
    </v-dialog>
  </div>
</div>

<!--   BANNERRRRRRRRRRRRRRRRRRRRRRRRRRRR      -->
  <v-img lazy-src="../assets/banner_2.jpg"
      max-height="300"
      max-width="1400"
      src="../assets/banner_2.jpg"></v-img>
      <!--ANTES:src="https://picsum.photos/id/11/500/300"-->
      <!--ANTES: lazy-src="https://picsum.photos/id/11/10/6"-->
      
      <hr>
  
  <!--   DATOS DE TITULO ANTES DE CONSULTAR RECETA      -->
    <div class="container">
      <h1><b> Bienvenido a Pandaza</b></h1>
      <h4>El recetario colaborativo mas grande del mundo</h4>
      <recipeConsult></recipeConsult>
    </div>
   

</div> 



</template>



<script>

import recipeConsult from '../components/recipeConsult.vue'


export default {
  components: {
    recipeConsult,
        
  },  data: () => ({
        email: "",
        password: ""
  }),
  methods:{
    login(){

    }
  }
   
};
</script>



<style scoped>
.bg-login{
  background-image: url('../assets/baner-login.jpg') ;
}
</style>
