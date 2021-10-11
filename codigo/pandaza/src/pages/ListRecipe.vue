<template>
  
  <div class="recetas">
    <h2>Recetario</h2>
    <v-container>
      <v-fab-transition>
                <v-btn                  
                  color="primary"
                  fab
                  dark
                  medium
                  absolute
                  top
                  right
                  link to="/AddRecipe"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
    <v-row>
      <v-col v-for="item in recetas" :key="item" md="3" sm="6" lg="4">
        
      <v-card 
      class="mx-auto"
      max-width="400">
      <v-img
        :src="item.photoReceta"    
        height="200px"
      ></v-img>

      <v-card-title>
        {{item.nameReceta}}
      </v-card-title>    
          
      <div>
        <v-divider></v-divider>
     
        <v-simple-table dense dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  <b>Ingredientes</b>
                </th>
                <th class="text-center">
                  <b>Cantidades</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="val in item.listaIngredientes"
                :key="val.name"
              >
                <td>{{ val.ingre }}</td>
                <td>{{ val.cant }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <v-card-actions>
      
      <v-btn
        outlined
        color="success" @click="editarReceta(item.nameReceta)"
        text> Editar
      </v-btn>
            
      <v-btn
        outlined
        color="red dark"
        @click="eliminarReceta(item.nameReceta)"
        text> Borrar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="show = !show"
        text
        color="#033"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <!--v-divider></v-divider-->
              <v-card-subtitle>
                <b>Preparación:</b>
              </v-card-subtitle>
            <v-card-text>
              {{item.descReceta}}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      </v-col>
    </v-row>
    
    </v-container>
  </div>
   
</template>

<script>

import { 
  getAllRecetas,
  deleteReceta
    } from "../services/RecetaServices";

export default {
    data(){
        return{
            recetas : [],
            valid: true,
            show: () => ({show: false,}),
            selectedItem: 1,
        }        
    },
    mounted(){
    getAllRecetas()
    .then((response)=>{
        this.recetas = response.data;
        console.log(response.data)    
    })
    .catch((err)=>console.error(err));
    },
    
    methods: {
      editarReceta(nameReceta){
        this.$router.push(`/AddRecipe/${nameReceta}`)

      },
      eliminarReceta(nameReceta){
        deleteReceta(nameReceta)
        .then(() => {
          console.log("exito");
          this.recetas = this.recetas.filter((item) => item.nameReceta != nameReceta);
        })
        .catch(()=>{
            console.log("error");
        })       

      }
      
    }
}
</script>

<style>

</style>