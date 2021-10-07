<template>

  <div class="container">
    <v-card-title class="decorado">
      <span class="text-h5 "><b>Crea una Nueva Receta</b></span>
    </v-card-title>

    <div clas=" cuerpo">
      <template>
        <v-form  enctype="multipart/form-data">
          <v-container>
            <v-row>
              <v-text-field
                v-model="receta.nombreReceta"
                label="Nombre de tu Receta"
                placeholder=""
                counter="40"
                required
              ></v-text-field>

              <v-file-input
                v-model="receta.imagenReceta"
  
                accept="image/png, image/jpeg, image/bmp"
                placeholder=""
                prepend-icon="mdi-camera"
                label="Agrega una Imagen"
                
              ></v-file-input>

              <div class="input-group mb-3 col-10">
             
                <input
                  type="text"
                  v-model="ingrediente"
                  placeholder="ingredientes"
                  class="form-control  "
                />
                   <input
                  type="text"
                  v-model="cantidad"
                  placeholder="cantidad"
                  class="form-control"
                />
              </div>
              <v-col cols="2" md="">
                <v-btn
                  class="mx-1"
                  small
                  fab
                  color="cyan"
                  @click="ingredientes()"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-col>

              <div>
                <span class="input-group-text ">Lista de ingredientes</span>
                <ul>
                  <li v-for="(ing, index) in this.losIngredientes" :key="index">
                    {{ index + 1 }} - {{ ing.ingrediente }} <span class="m-4"> x </span> {{ ing.cantidad }} 
                    
                    <v-btn
                      x-small
                      fab
                      color="cyan"
                      @click="losIngredientes.splice(index, 1)"
                    >
                      <v-icon class="float-right">
                        mdi-minus
                      </v-icon>
                    </v-btn>
                  </li>
                </ul>
              </div>

              <v-textarea solo label="Preparación"
              v-model="receta.preparacion"
              ></v-textarea>

              <div>
                <v-row align="center" justify="space-around">
                  <v-col cols="12" md="2">
                    <a href="/">
                      <v-btn depressed color="error" >
                        Cancelar
                      </v-btn>
                    </a>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-btn depressed color="primary" type="submit" @click.prevent="submit">
                      Nueva Receta
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-row>
          </v-container>
        </v-form>
      </template>
    </div>
    <div></div>

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

export default {
  data() {
    return {
      Recetas: [],
      losIngredientes: [],
      ingrediente: "",
      cantidad: "",
      receta: {
        nombreReceta: "",
        imagenReceta: [],
        preparacion: "",
        
      },
    };
  },
  methods: {
    ingredientes() {
      let ingredientes = {
        ingrediente: this.ingrediente,
        cantidad: this.cantidad,
      };
      this.losIngredientes.push(ingredientes);
      (this.ingrediente = ""), (this.cantidad = "");
    },
    async submit() {
      let laReceta = new FormData();
          laReceta.append("nombreReceta", this.receta.nombreReceta);
          laReceta.append("imagenReceta", this.receta.imagenReceta);
          laReceta.append("ingredientes", JSON.stringify(this.losIngredientes));
          laReceta.append("preparacion", this.receta.preparacion);

          let result = await fetch("http://localhost:3000/recetas", {
                  method: "POST",
                  // autorization: `Bearer ${userToken}`,
                  body: laReceta,
                  
                });
          console.log(await result.json() );
    },
   
  },

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




<style scoped>
.container {
  max-width: 800px;
}
.cuerpo {
  box-shadow: 2px 2px 5px #999;
}
.decorado {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(10, 53, 241, 0.8)),
    url("../assets/banner_2.jpg");
  background-size: cover;
  background-position: center;
  height: 90px;
  color: antiquewhite;
}a{
  text-decoration: none;
}
</style>
