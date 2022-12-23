import { combineReducers } from "redux";
import { dataReducer } from "./allData";
import { cartReducer } from "./cartData";
import { subtotalReducer } from "./subtotal";

const rootReducer = combineReducers({
  allData: dataReducer,
  cartData: cartReducer,
  subtotal: subtotalReducer,
});

export default rootReducer;
