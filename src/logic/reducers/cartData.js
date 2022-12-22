export const cartReducer = (state = [], actions) => {
  switch (actions.type) {
    case "GET_DATA": {
      state = actions.payload.value;
      return state;
    }
    case "SET_DATA": {
      state = actions.payload.value;
      return state;
    }
    default: {
      return state;
    }
  }
};
