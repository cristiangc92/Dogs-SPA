const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require("./dogs.routes");
const temperament = require("./temperament.routes");
const dog = require("./dog.routes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogs);
router.use("/temperament", temperament);
router.use("/dog", dog);

module.exports = router;
