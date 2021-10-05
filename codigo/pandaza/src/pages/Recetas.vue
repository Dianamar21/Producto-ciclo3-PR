<template>
    <v-container>
    <div class="recetas">      
          <h3>Esto es la conexion del front - back</h3>
        <ul>
            <li v-for="item in recetas" :key="item.code">              
          <v-card elevation="2">
          <v-card-title>{{item.name}}</v-card-title>
            <v-simple-table>
              <template v-slot:default>
              <thead>
                <tr>
                <th class="text-center">
                <b>Ingredientes</b>
                </th>
                <th class="text-center">
                <b>Cantidades</b>
                </th>
                <th class="text-center">
                <b>Und medida</b>
                </th>
                </tr>
                </thead>
                <tbody> 
                  <!--td>{{recetas.ingredients.ningr[0]}}</td-->                       
                        <tr v-for="val1 in recetas"
                          :key="val1.code.code1">
                          <td>{{ val1.ingredients.ningr }}</td>
                          <!--td>{{ val1.cant }}</td>
                          <td>{{ val1.udm }}</td-->                                                                                                 
                        </tr>
                </tbody>
                    </template>
                </v-simple-table>
            <v-card-text>
                <h4>Preparacion:</h4>
                {{item.desc}}
            </v-card-text>
            
          </v-card>
            </li>
        </ul>    
    
  </div>
  <v-row>
      <v-col cols="1" md="6">
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="12"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="photo"
      :rules="photoRules"
      label="photo"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
            </v-col>
        </v-row>
    </v-container>  
   
</template>

<script>

import {getAllRecetas} from "../services/RecetaServices";
export default {
    data(){
        return{
            recetas : [],
            valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 12) || 'Name must be less than 12 characters',
      ],
      photo: '',
      photoRules: [
        v => !!v || 'Photo is required',
        //v => (v.$refs in(".png" & ".jpeg") || 'vndjnjdncnkmdd',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false
            
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
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }

}

</script>

<style>

</style>