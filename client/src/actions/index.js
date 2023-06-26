import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: json.data,
      });
    } catch (error) {
      console.log("Error en la action getDogs: ", error);
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/temperament");
      return dispatch({
        type: "GET_TEMPERAMENTS",
        payload: json.data,
      });
    } catch (error) {
      console.log("Error en la action getTemperaments: ", error);
    }
  };
}

export function filterDogsByTemperaments(payload) {
  return {
    type: "FILTER_BY_TEMPERAMENTS",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
}

export function getNameDogs(name) {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/dogs?name=" + name);
    return dispatch({
      type: "GET_NAME_DOG",
      payload: json.data,
    });
  };
}
