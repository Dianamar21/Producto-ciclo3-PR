const express = require("express");
const recetasController = require("../controllers/recetasController");
const usuariosController = require("../controllers/usuariosController");
const router = express.Router();

// yeison hizo esta instancia...
// yeison usando multer para poder insertar la imagen...
const multer = require('multer');
/// yeison mitlleware multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
const upload = multer({
    storage: storage,
}).single("imagenReceta");


// rutas de recetas
router.get("/ver-recetas", recetasController.getAll);
router.get("/recetas/:_id", recetasController.getByCode);
//: hace referencia a una variable - busqueda de un elemento especifico
router.post("/recetas", upload, recetasController.insert);
router.put("/recetas/:_id", upload, recetasController.update);
router.delete("/recetas/:_id", recetasController.delete);


// ruta imagen
// ruta de usuarios
router.post("/usuarios", usuariosController.insert);
router.post("/usuarios/login", usuariosController.login);

module.exports = router;