const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
      name: String,
      address: String,
      city: String,
      state: String,
      zip: String,
      country: String,
      // Agregar correo y clave a la interfaz, por que son los datos de validacion
      email: String,
      password: String
});

module.exports = mongoose.model("usuarios", usuariosSchema);