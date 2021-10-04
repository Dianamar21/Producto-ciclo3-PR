const mongoose = require("mongoose");

const recetasSchema = mongoose.Schema({
    "code": Number,
    "name": String,
    "photo": String,    
    "ingredients": Array(String),
    "desc":String
});

module.exports = mongoose.model("Consultarecetas", recetasSchema);