const express = require("express");
const recetasController = require("../controllers/recetasController");
const usuariosController = require("../controllers/usuariosController");
const router = express.Router();

// rutas de recetas
router.get("/recetas", recetasController.getAll);
router.get("/recetas/:nameReceta", recetasController.getByCode);
//: hace referencia a una variable - busqueda de un elemento especifico
router.post("/recetas", recetasController.insert);
router.put("/recetas/:nameReceta", recetasController.update);
router.delete("/recetas/:nameReceta", recetasController.delete);

// ruta de usuarios
router.post("/usuarios", usuariosController.insert);
router.post("/usuarios/login", usuariosController.login);

module.exports = router;