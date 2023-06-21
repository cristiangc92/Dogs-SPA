const { Router } = require("express");
const { getAllDogs, getApiInfo } = require("../controllers/dogController");
const { validate: uuidValidate } = require("uuid");
const { Dog, Temperament } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const dogsTotal = await getAllDogs();
    if (name) {
      const dogsName = dogsTotal.filter((d) =>
        d.name.toLowerCase().includes(name.toLowerCase())
      );
      dogsName.length
        ? res.status(200).json(dogsName)
        : res.status(404).send("No se encontraron resultados");
    } else {
      res.status(200).json(dogsTotal);
    }
  } catch (error) {
    console.log("Error en get /dogs: ", error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!uuidValidate(id)) {
      const dogTotal = await getApiInfo();
      const dogId = dogTotal.find((d) => d.id == id);
      dogId
        ? res.status(200).json(dogId)
        : res.status(404).send("No se encontro el ID en la API");
    } else {
      const dog = await Dog.findByPk(id, {
        include: Temperament,
      });
      dog
        ? res.status(200).json(dog)
        : res.status(404).send("No se encontro el ID en la base de datos");
    }
  } catch (error) {
    console.log("Error en get /dogs/:id: ", error);
  }
});

module.exports = router;
