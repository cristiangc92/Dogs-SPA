const { Router } = require("express");
const { Dog, Temperament } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    image,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    minLife_span,
    maxLife_span,
    createdInDb,
    temperament,
  } = req.body;
  try {
    const dogCreated = await Dog.create({
      name,
      image:
        image ||
        "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
      minHeight,
      maxHeight,
      minWeight,
      maxWeight,
      minLife_span,
      maxLife_span,
      createdInDb,
    });
    const temperamentDb = await Temperament.findAll({
      where: { name: temperament },
    });
    dogCreated.addTemperament(temperamentDb);
    res.status(201).send("Dog creado con exito");
  } catch (error) {
    console.log("Error en post /dog", error);
  }
});

module.exports = router;
