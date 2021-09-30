const express = require("express");
const recetasController = require("../controllers/recetasController");
const router = express.Router();

// rutas de recetas
router.get("/recetas", recetasController.getAll);
router.get("/recetas/:code", recetasController.getByCode);
//: hace referencia a una variable - busqueda de un elemento especifico
router.post("/recetas", recetasController.insert);
router.put("/recetas/:code", recetasController.update);
router.delete("/recetas/:code", recetasController.delete);

module.exports = router;