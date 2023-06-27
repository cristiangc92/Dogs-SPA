const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "FILTER_BY_TEMPERAMENTS":
      const allDogs = state.allDogs;
      const temperamentsFiltered =
        action.payload === "All"
          ? allDogs
          : allDogs.filter((p) => p.temperament?.includes(action.payload));
      return {
        ...state,
        dogs: temperamentsFiltered,
      };

    case "FILTER_CREATED":
      const allDogs2 = state.allDogs;
      const createdFilter =
        action.payload === "Created"
          ? allDogs2.filter((v) => v.createdInDb === true)
          : allDogs2.filter((v) => v.createdInDb !== true);
      return {
        ...state,
        dogs: action.payload === "All" ? state.allDogs : createdFilter,
      };

    case "ORDER_BY_NAME":
      const sortedArrName = [...state.dogs];
      action.payload === "asc"
        ? sortedArrName.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return -1;
            }
            return 0;
          })
        : sortedArrName.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        dogs: sortedArrName,
      };

    case "ORDER_BY_WEIGHT":
      const sortedArrAttack = [...state.dogs];
      action.payload === "low"
        ? sortedArrAttack.sort(function (a, b) {
            if (a.minWeight > b.minWeight) {
              return 1;
            }
            if (b.minWeight > a.minWeight) {
              return -1;
            }
            return 0;
          })
        : action.payload === "high"
        ? sortedArrAttack.sort(function (a, b) {
            if (a.minWeight > b.minWeight) {
              return -1;
            }
            if (b.minWeight > a.minWeight) {
              return 1;
            }
            return 0;
          })
        : state.dogs;
      return {
        ...state,
        dogs: sortedArrAttack,
      };

    case "GET_NAME_DOG":
      return {
        ...state,
        dogs: action.payload,
      };

    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "VACIAR_DETAIL":
      return {
        ...state,
        detail: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
