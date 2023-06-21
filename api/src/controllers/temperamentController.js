const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../db");

const getTemperaments = async () => {
  try {
    const temperamentUrl = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const temperamentApi = await temperamentUrl.data
      .map((d) => (d.temperament ? d.temperament : "Not found"))
      .map((t) => t?.split(", "));
    temperamentApi.forEach((t) =>
      t.forEach((temperament) =>
        Temperament.findOrCreate({
          where: { name: temperament },
        })
      )
    );
  } catch (error) {
    console.log("Error en getTemperaments: ", error);
  }
};

module.exports = getTemperaments;
