export const subtotalReducer = (state = 0, actions) => {
  switch (actions.type) {
    case "CALC_SUBTOTAL": {
      state = actions.payload;
      return state;
    }
    default:
      return state;
  }
};
