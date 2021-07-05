import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import shopReducer from "./shop.reducer";

export default combineReducers({
  shopReducer,
  cartReducer,
});
