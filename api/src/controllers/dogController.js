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
        minHeight: d.height.metric.slice(0, 2).trim(),
        maxHeight: d.height.metric.slice(4).trim(),
        minWeight: d.weight.metric.slice(0, 2).trim(),
        maxWeight: d.weight.metric.slice(4).trim(),
        minLife_span: d.life_span.slice(0, 2).trim(),
        maxLife_span: d.life_span.slice(4, -6).trim(),
        temperament: d.temperament,
      };
    });
    dogsApi.forEach((e) => {
      if (e.minHeight === "") {
        e.minHeight = e.maxHeight;
      }
      if (e.maxHeight === "") {
        e.maxHeight = e.minHeight;
      }
      if (e.minWeight === "") {
        e.minWeight = e.maxWeight;
      }
      if (e.maxWeight === "") {
        e.maxWeight = e.minWeight;
      }
      if (e.minLife_span === "") {
        e.minLife_span = e.maxLife_span;
      }
      if (e.maxLife_span === "") {
        e.maxLife_span = e.minLife_span;
      }
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

module.exports = { getApiInfo, getAllDogs };
