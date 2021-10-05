const mongoose = require("mongoose");

const recetasSchema = mongoose.Schema({
    "code": Number,
    "name": String,
    "photo": String,    
    "nameIngre": Array(String),
    "qtyIngre": Array(String),
    "uomIngre": Array(String),
    "desc":String
});

// Rager Rosa cambia el nombre de la coleccion de Consultarecetas a solo recetas,
// ya que es generico y NO solo de consulta
module.exports = mongoose.model("recetas", recetasSchema);