const express = require("express");
const recetasController = require("../controllers/recetasController");
const usuariosController = require("../controllers/usuariosController");
const router = express.Router();

// rutas de recetas
router.get("/recetas", recetasController.getAll);
router.get("/recetas/:code", recetasController.getByCode);
//: hace referencia a una variable - busqueda de un elemento especifico
router.post("/recetas", recetasController.insert);
router.put("/recetas/:code", recetasController.update);
router.delete("/recetas/:code", recetasController.delete);

// ruta de usuarios
router.post("/usuarios", usuariosController.insert);
router.post("/usuarios/login", usuariosController.login);

module.exports = router;