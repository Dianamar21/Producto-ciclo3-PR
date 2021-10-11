<template>
  <div>
    <div class="transition-swing text-h3 mb--1">{{ titulo }}</div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              outlined
              label="titulo receta"
              placeholder="Ej: Arroz frito con gambas"
              v-model="nameReceta"
              ref="nameReceta"
              :rules="rules"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <!--v-text-input accept="image/*" label="fotoreceta"
             v-model="photoReceta" ref="photoReceta"></v-file-input-->
             <v-text-field
              outlined
              :rules="rules"
              label="photo receta"
              v-model="photoReceta"
              ref="nameReceta"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              outlined
              label="Nombre Ingrediente:"
              :rules="rules"
              placeholder="Arroz"
              v-model="ingre"
              ref="nameIngre"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined label="Cantidad/Unidad de medida:" 
            placeholder="100 gr, 2 unidades, 2 tasas ...." :rules="rules" 
            v-model="cant" ref="qtyIngre"></v-text-field>
          </v-col>
          <v-col cols="3">            
          </v-col>
          <v-col cols="1">
            <v-btn class="mx-2" fab dark color="indigo" 
            @click="agregarIngredientes()">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12">
            <v-textarea
              outlined
              name="input-7-4"
              :rules="rules"
              label="Descripcion"
              hint="Calentar sarten, agregar pollo y arroz"
              v-model="descReceta"
              ref="descReceta"
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-btn depressed color="primary" v-if="!isEdit" @click="guardarReceta()"> Guardar </v-btn>
          <v-btn depressed color="success" v-if="isEdit" @click="actualizarReceta()"> Actualizar </v-btn>    
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
//import axios from 'axios';
import { insertReceta, getReceta, updateReceta} from "../services/RecetaServices"

export default {
  //components: {},
  data() {
    return {
      titulo: "Agregar receta",
      isEdit: false,
      nameReceta: "",
      photoReceta: "",
      ingre: "",
      cant: "",
      listaIngredientes: [],
      /*ingredients: {
        qtyIngre: "",
        nameIngre: "",
      },*/     
      descReceta:"",
      rules: [value => !!value || 'Required.']      
    }     
  },
  created (){
    const code = this.$route.params.nameReceta;
    console.log("¿Tiene nombre? ... " + code);
    if(code != undefined){
      
      getReceta(code)
      .then((response) => {
        const receta = response.data;
        this.nameReceta = receta.nameReceta;
        this.photoReceta = receta.photoReceta;
        this.listaIngredientes = receta.listaIngredientes;
        this.ingre = receta.ingre;
        this.cant = receta.cant;
        this.descReceta = receta.descReceta;
        //en la data u en este metodo???
        this.titulo = "Editar Receta";
        this.isEdit = true;
      })
      .catch( () => console.log("Datos no encontrados"));

    }
  },
  methods: {
    guardarReceta() {

      if(
        this.nameReceta == undefined || this.nameReceta == "" ||
        this.photoReceta == undefined || this.photoReceta == "" ||
        this.listaIngredientes == undefined || this.listaIngredientes == [] ||
        this.descReceta == undefined || this.descReceta == ""
        //this.ingre == undefined || this.ingre == "" ||
        //this.cant == undefined || this.cant == ""
      ){
        return console.log("no llenaste alguno de los" + 
        "campos obligatorios");
      }
        const receta = {
          nameReceta: this.nameReceta,
          photoReceta: this.photoReceta,
          listaIngredientes: this.listaIngredientes,
          /*cant: this.cant,
          ingre: this.ingre,*/
          descReceta: this.descReceta,
        }        
        insertReceta(receta)
        .then((response)=>{
          console.log("Se ha creado la receta", response.data._id);
        })
        .catch((err)=>console.error(err));       

      },
      actualizarReceta() { //updateReceta

      if(
        this.nameReceta == undefined || this.nameReceta == "" ||
        this.photoReceta == undefined || this.photoReceta == "" ||
        this.listaIngredientes == undefined || this.listaIngredientes == [] ||
        this.descReceta == undefined || this.descReceta == ""
        //this.ingre == undefined || this.ingre == "" ||
        //this.cant == undefined || this.cant == ""
      ){
        return console.log("no llenaste alguno de los" + 
        "campos obligatorios");
      }
        const receta = {
          nameReceta: this.nameReceta,
          photoReceta: this.photoReceta,
          listaIngredientes: this.listaIngredientes,
          cant: this.cant,
          ingre: this.ingre,
          descReceta: this.descReceta,
        }        
        updateReceta(this.nameReceta, receta)
        .then(()=>{
          console.log("Se ha Actualizado la receta " + this.nameReceta);
        })
        .catch((err)=>console.error(err));       

      },

      //*-*-*-*
      agregarIngredientes() {
        const ingredientes = {
          ingre: this.ingre,
          cant: this.cant,
        };
        this.listaIngredientes.push(ingredientes);
        /*this.ingredients["nameIngre"] = ingredientes["ingre"];
        this.ingredients["qtyIngre"] = ingredientes["cant"];*/        
        (this.ingre = ""), (this.cant = "");
      }
  }
};
</script>
