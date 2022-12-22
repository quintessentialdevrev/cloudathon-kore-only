import data from "../data";

export const dataReducer = (state = data, actions) => {
  switch (actions.type) {
    case "ADD_ITEM": {
      const newQuantity = actions.payload.quantity + 1;
      let temp = state;
      state = temp.map((book) => {
        if (book.id === actions.payload.id) {
          return { ...book, quantity: newQuantity };
        } else return book;
      });
      return state;
    }
    case "REMOVE_ITEM": {
      const newQuantity = actions.payload.quantity - 1;
      let temp = state;
      state = temp.map((book) => {
        if (book.id === actions.payload.id) {
          return { ...book, quantity: newQuantity };
        } else return book;
      });
      return state;
    }
    default: {
      return state;
    }
  }
};
