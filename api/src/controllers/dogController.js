const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

const getApiInfo = async () => {
  try {
    const dogsUrl = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const dogsApi = await dogsUrl.data.map((d) => {
      return {
        id: d.id,
        name: d.name,
        image: d.image.url,
        height: d.height,
        weight: d.weight,
        life_span: d.life_span,
        temperament: d.temperament,
      };
    });
    return dogsApi;
  } catch (error) {
    console.log("Error en getApiInfo: ", error);
  }
};

const getDbInfo = async () => {
  try {
    const dogsDb = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dogsDb;
  } catch (error) {
    console.log("Error en getDbInfo: ", error);
  }
};

const getAllDogs = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = getAllDogs;
