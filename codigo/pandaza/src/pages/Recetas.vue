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
        <v-list shaped>
          <v-list-item-group
          v-model="selectedItem"
          color="primary">
        <v-list-item>
          <v-list-item-content >
            <v-list-item-title align = "justify"> ingredientes: </v-list-item-title>
            <v-list-item-subtitle align = "right"> {{item.nameIngre.join(",")}} </v-list-item-subtitle>
            
            <v-list-item-title align = "justify"> cantidades: </v-list-item-title>
            <v-list-item-subtitle align = "right"> {{item.qtyIngre.join(",")}} </v-list-item-subtitle>
          
            <v-list-item-title align = "justify"> unidades de medida: </v-list-item-title>
            <v-list-item-subtitle align = "right"> {{item.uomIngre.join(",")}} </v-list-item-subtitle>
          </v-list-item-content>
          
        </v-list-item>
        
        </v-list-item-group>
        </v-list>
      </div>

      <v-card-actions>
      
      <v-btn
        outlined
        color="success"
        text> Agregar
      </v-btn>
            
      <v-btn
        outlined
        color="red dark"
        text>Borrar
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
            <v-divider></v-divider>
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

import { getAllRecetas } from "../services/RecetaServices";

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
      
    }
}
</script>

<style>

</style>