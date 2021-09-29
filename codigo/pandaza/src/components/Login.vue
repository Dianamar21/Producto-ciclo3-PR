<template>
  <div>
    <!--   CAJON EXCLUSIVO LOGIN      -->
    <h4>LOGIN</h4>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              :rules="[rules.required, rules.email]"
              label="E-mail"
              required
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="showPassword ? 'text' : 'password'"
              required
              @click:append="showPassword = !showPassword"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-btn depressed color="primary"> LOGIN </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async login() {
      const { data: token } = await axios.post(
        "http://localhost:3000/api/session/login",
        { username: "test", password: "test123" }
      );
      localStorage.setItem("pandaza-token", token);
    },
  },
  data() {
    return {
      showPassword: false,
      username: "",
      email: "",
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