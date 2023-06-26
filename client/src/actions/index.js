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
