const mongoose = require("mongoose");

const recetasSchema = mongoose.Schema({
    // yeison edito esto 
    "nombreReceta": String,
    "imagenReceta": String,
    "ingredientes": Array,
    "preparacion": String,
    created: {
        type: Date,
        default: Date.now,
    },
});

// Rager Rosa cambia el nombre de la coleccion de Consultarecetas a solo recetas,
// ya que es generico y NO solo de consulta
module.exports = mongoose.model("recetas", recetasSchema);