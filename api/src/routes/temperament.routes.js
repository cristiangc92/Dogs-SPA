const { Router } = require("express");
const { Temperament } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allTemperament = await Temperament.findAll();
    const temperamentMap = allTemperament.map((t) => t.name);
    res.status(200).json(temperamentMap);
  } catch (error) {
    console.log("Error en get /temperament: ", error);
  }
});

module.exports = router;
