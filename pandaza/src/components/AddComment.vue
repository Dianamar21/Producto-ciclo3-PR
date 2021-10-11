<template>  
  <v-container fluid class="pa-md-4 mx-lg-auto">
    <!--v-spacer></v-spacer-->
    <h3 class="text-justify pa-2 font-weight-bold font font-italic">Agregar comentarios</h3>
    <v-row >
      
      <v-col
        cols="12"
        md="6">
        <!--md da el ancho del text area-->
        <v-textarea
          id="textarea"
          outlined
          rows="4"
          no-resize
          clearable
          clear-icon="mdi-eraser"          
          v-model="comentInput"
          solo  
          name="textArea-1"
          :rules="rules"      
          :readonly="readonly"
          label="Deje sus comentarios aquí"
        ></v-textarea>
        <div class="text-center">
        <v-btn
          id="boton"
          class="ma-2"
          outlined
          color="indigo"
          v-on:click="saveComent()"
        >Enviar comentario
        </v-btn>
        <v-btn
          class="ma-2"
          outlined
          color="green"
          @click="activarCampo()"
        >Habilitar
        </v-btn>
        </div>        
      </v-col>
    </v-row>
    <!---->
    <v-row>
      <v-container fluid>          
            <v-container>
              <v-row dense>
                <v-col cols="6">
                    <v-card
                      class="mx-auto"
                      color="#26c6da"
                      dark
                      max-width="600"
                    >
                    <v-card-title>
                      <v-icon
                        large
                        left
                      >mdi-food-croissant</v-icon>
                      <span class="text-h5 font-weight-light">Comentarios...</span>
                    </v-card-title>

                    <v-card-text class="text-h5 font-weight-bold">
                      <v-list dense>
                        <v-subheader>REPORTS</v-subheader>
                        <v-list-item-group
                          v-model="selectedItem"
                          color="primary"
                        >
                          <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                          > {{index + 1}}
                            <!--v-list-item-icon>
                              <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon-->
                            <v-list-item-content>
                              <v-list-item-title v-text="item.mensaje"></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card-text>

                    <v-card-actions>
                      <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                          <v-img
                            class="elevation-6"
                            alt=""
                            src="../assets/logo2.png"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Pandaza Team</v-list-item-title>
                        </v-list-item-content>

                        <v-row
                          align="center"
                          justify="end"
                        >
                          <!--v-icon class="mr-1">
                            mdi-heart
                          </v-icon>
                          <span class="subheading mr-2">256</span>
                          <span class="mr-1">·</span-->
                          <!--v-icon class="mr-1">
                            mdi-share-variant
                          </v-icon>
                          <span class="subheading">45</span-->                          
                        </v-row>
                      </v-list-item>
                    </v-card-actions>
                </v-card>
                  
                </v-col>
              </v-row>
            </v-container>
          <!---->
          <v-list-item>
            <v-list-item-content :v-model="comentInput">
              <v-list-item-title></v-list-item-title>
                <div style="text-align:justify"></div>
              </v-list-item-content>
          </v-list-item>                      
      </v-container>
      </v-row>
  </v-container>     
  
    
</template>

<script>
export default {
  data() {
    return {
      
      readonly: true,
      comentInput: "",
      textarea: "",      
      items: [
      { mensaje: 'First' },
      { mensaje: 'Second' },
      ],
      rules: [v => v.length <= 200 || 'Max 200 characters'],
    };
  },
  mounted(){
    /*es la funcion que llama vue cuando termina de cargar 
    el componente y lo enlazo o lo monto al elemento que 
    estamos trabajando*/
      const coment = JSON.parse(localStorage.getItem("coment"));
        if (coment != undefined){
          this.comentInput = coment.cInput;          
        }
    },

  methods: {
    activarCampo() {
      this.readonly = !this.readonly;    
    },
    saveComent() {
      let comentarios = JSON.parse(localStorage.getItem("comentarios"));
      if (comentarios == undefined) {
          comentarios = [];        
      }
      let idco = localStorage.getItem("idco");
      if(idco  == undefined) {
          idco = 1;
      } else {
          idco = parseInt(idco) + 1;
      }
      const coment = {
        id: idco,
        comentInput:this.comentInput,

      };
      comentarios.push(coment);
      this.idComentario = "";
          
      localStorage.setItem("comentarios", JSON.stringify(comentarios));
      //localStorage.setItem("comentarios");
      /*local storage viene en los navegadores, sitio 
      de almacenamiento previo o temporal  */
      /*JSON.stringify()trasforma objetos JSON en cadenas de texto */
      localStorage.setItem("idco", idco);
      //this.$emit('saveComent');

    },

  },
};


</script>


<style scoped>
</style>