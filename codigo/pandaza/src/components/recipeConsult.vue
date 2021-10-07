<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="receta in recetas" :key="receta.id" sm = "4" class="pa-3">
          <v-card class="pa-1">

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div>

    </div>

  </div>
</template>

<script>
//import axios from 'axios';
//import API from '../api';
export default {
  name:RecipeConsult,
  data(){
    return{
      recetas:[],
    };
  },
  //async created(){
  //  this.recetas = await this.axios.get('http://localhost:3000/api/recetas');
  //},
}
</script>

<style>

</style>