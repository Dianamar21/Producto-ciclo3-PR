<template>
  <div>
    <!--   CAJON EXCLUSIVO LOGIN      -->

    <div>
      <h4 v-show="isUserLoggedIn">
         {{ message }} 
      </h4>
      <v-row justify="" class="btn-flotante">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template  v-slot:activator="{ on, attrs }">
            <v-btn  color="primary" dark v-bind="attrs" v-on="on">
              Login
            </v-btn>
                
          </template>
          
          


          <v-card>
            <v-card-title class="decorado">
              <span class="text-h5 "><b>Iniciar Sesion</b></span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                    required
                  />

                  <v-text-field
                    label="Password"
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    @click:append="showPassword = !showPassword"
                  />
                </v-row>
              </v-container>
              <small
                > <a href="http://localhost:3000/login"> REGISTRATE AQUI </a> 
                <v-icon>mdi-format-list-bulleted-square </v-icon></small
              >
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="primary" text @click="login">
                Login <v-icon> mdi-account-circle</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

  </div>
  
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async login() {
      try {
        const requestBody = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post(
          "http://localhost:3000/usuarios/login",
          requestBody
        );
        localStorage.setItem("pandaza-token", response.data.token);
        this.isUserLoggedIn = true;
        this.message = `Bienvenido ${response.data.name} a tu recetario`;
        // yeison edito aqui
        this.dialog = false;
        // hasta aqui

      } catch (error) {
        this.isUserLoggedIn = false;
        this.message = `Email o Password incorrectos`;
        throw error;
      }
    },
  },
  data() {
    return {
      dialog: false,
      showPassword: false,
      email: "",
      password: "",
      message: "",
      isUserLoggedIn: false,
      rules: {
        required: (value) => !!value || "Campo requerido.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo invalido.";
        },
      },
    };
  },
};
</script>

<style scoped>
.decorado {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(10, 53, 241, 0.8)), url("../assets/banner_2.jpg");
    background-size: cover;
    background-position: center;
    height: 90px;
    color: antiquewhite;
}
.btn-flotante {
font-size: 12px; /* Cambiar el tamaño de la tipografia */
text-transform: uppercase; /* Texto en mayusculas */
font-weight: bold; /* Fuente en negrita o bold */
color: #ffffff; /* Color del texto */
border-radius: 5px; /* Borde del boton */
letter-spacing: 2px; /* Espacio entre letras */
background-color: #1ea9e9; /* Color de fondo */
padding: 8px 20px; /* Relleno del boton */
position: fixed;
bottom: 30px;
right: 40px;
transition: all 300ms ease 0ms;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
z-index: 99;
border-radius: 100%;
}
.btn-flotante:hover {
background-color: #2c2fa5; /* Color de fondo al pasar el cursor */
box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
.btn-flotante {
font-size: 14px;
padding: 12px 20px;
bottom: 20px;
right: 20px;
}
}
</style>
