import { combineReducers } from "redux";
import { dataReducer } from "./allData";
import { cartReducer } from "./cartData";

const rootReducer = combineReducers({
  allData: dataReducer,
  cartData: cartReducer,
});

export default rootReducer;
