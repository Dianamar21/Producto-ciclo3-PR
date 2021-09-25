<template></template>

<script>
import axios from "axios";

export default {
  methods: {
    async login() {
      const { data: token } = await axios.post(
        "http://localhost:3000/api/session/login",
        { username: "test", password: "test123" }
      );
      localStorage.setItem('pandaza-token', token);
    },
  },
};
</script>

<style>
</style>