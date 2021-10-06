<template>
  <div>
    <div class="transition-swing text-h3 mb--1">Agregar Receta</div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              outlined
              label="titulo receta"
              placeholder="Arroz con pollo"
              v-model="nameReceta"
              ref="nameReceta"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-file-input accept="image/*" label="fotoreceta"
             v-model="photoReceta" ref="photoReceta"></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              outlined
              label="Nombre Ingrediente:"
              placeholder="Arroz"
              v-model="nameIngre"
              ref="nameIngre"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined label="Cantidad:" 
            placeholder="100, 200, ...." v-model="qtyIngre" ref="qtyIngre"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field outlined label="Und medida:" 
            placeholder="gr, ml, tazas, unidades ..." v-model="uomIngre"
            ref="uomIngre"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn class="mx-2" fab dark color="indigo">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-row v-for="ingridient in recipe.ingridients" :key="ingridient.id">
          <v-col cols="6">
            <v-subheader v-text="ingridient.name" />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Cantidad"
              v-text="ingridient.quantity"
              suffix="lbs"
            ></v-text-field>
            <v-btn class="mx-2" fab dark small color="primary">
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </v-col>
        </v-row> -->
        <!-- <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn> -->
        <v-row>
          <v-col cols="12">
            <v-textarea
              outlined
              name="input-7-4"
              label="Descripcion"
              hint="Calentar sarten, agregar pollo y arroz"
              v-model="descReceta"
              ref="descReceta"
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-btn depressed color="primary" @click="guardarReceta()"> Guardar </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
//import axios from 'axios';
import { insertReceta } from "../services/RecetaServices"

export default {
  //components: {},
  data() {
    return {
      nameReceta: "",
      photoReceta: "",
      nameIngre: [],
      qtyIngre: [],
      uomIngre: [],
      descReceta:""      
    }     
  },
  methods: {
    guardarReceta() {
        const receta = {
          nameReceta: this.nameReceta,
          photoReceta: this.photoReceta,
          qtyIngre: this.qtyIngre,
          uomIngre: this.uomIngre,
          descReceta: this.descReceta,
        }        
        insertReceta(receta)
        .then((response)=>{
          console.log("Se ha creado la receta", response.data._id);
        })
        .catch((err)=>console.error(err));       

      }
  }
};
</script>
