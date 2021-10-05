<template>
  <div>
    <!--   CAJON EXCLUSIVO LOGIN      -->
    <h4 v-show="!isUserLoggedIn">LOGIN</h4>

    <v-form v-show="!isUserLoggedIn">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
              required
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Password"
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="showPassword ? 'text' : 'password'"
              required
              @click:append="showPassword = !showPassword"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-btn @click="login" depressed color="primary"> LOGIN </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <h3 v-show="isUserLoggedIn">
      {{ message }}
    </h3>
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
          "http://localhost:3000/api/usuarios/login",
          requestBody
        );
        localStorage.setItem("pandaza-token", response.data.token);
        this.isUserLoggedIn = true;
        this.message = `Bienvenido ${response.data.name} a tu recetario`;
      } catch (error) {
        this.isUserLoggedIn = false;
        this.message = `Email o Password incorrectos`;
        throw error;
      }
    },
  },
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      message: "",
      isUserLoggedIn: false,
      rules: {
        required: (value) => !!value || "Campo requerido.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo invalido.";
        },
      },
    };
  },
};
</script>

<style>
</style>