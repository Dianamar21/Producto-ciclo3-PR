<template>
 <div> 
<div>
    <v-text-field
            label="Consulta tu receta"
            placeholder="Placeholder"
          ></v-text-field>
        
        <v-btn depressed> Consultar </v-btn>
    </div>

<div id="resultado">
     <v-row>
         <v-col v-for="n in 10" :key="n">>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slots="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  </div>
</div>

</template>

<script>
/*
function mostrarEnPantalla(){
    const inputName = document.getElementById("consultar_receta");
    //const salida= document.getElementById("salida");
    //const salida2= document.getElementById("salida");
    const salida3= document.getElementById("salida");
    
    let resultado = "";
    //var datos_receta = "<ul>ingrediente 1</ul> <ul>ingrediente 2</ul><br>"
    var botonzaso = "<div class='d-grid gap-2'><button type='button ' class='btn btn-primary' onclick='mostrarEnPantalla()'><b>Detalles</b></button></div>";
    
   // ` simbolo para concatenar en diferentes lineas
                
    var datos_receta = "ingrediente 1 <br> ingrediente 2<br>"+botonzaso;
    for(let i=0; i<6; i++){
        resultado += "<div class ='col'>" 
                    +"<b>Receta: </b>"
                    +inputName.value+ " " +(i+1)+
                    "<br>"
                    +datos_receta+"<br></div>";   
    }
           
    //salida.innerHTML = "<h3>"+inputName.value+"</h3>";
    //salida2.innerHTML = "<div class ='row row-cols-3'>"+inputName.value+"</div>";
    //salida3.innerHTML = "<div class ='row row-col-lg-3 row-col-md-3 row-col-sm-1 row-cols-3'>"+resultado+"</div>";
    salida3.innerHTML = "<div class ='row row-col-xs-1 row-col-sm-1'>"+resultado+"</div>";
    
    //salida3.innerHTML = "<div class ='row row-cols-3'>"+resultado+"</div>";

    console.log(inputName.value);
    inputName.value = "";

}*/
export default {
    name: 'recipeConsult',
    inputName: "document.getElementById('consultar_receta')",
     salida: "document.getElementById('salida')",
  props: {
    msg: String
  }, methods:{
     mostrarEnPantalla(){
          

      }
  }

}
</script>

<style>

</style>