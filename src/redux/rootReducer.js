import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import coldDrinkReducer from "./coldDrink/coldDrinkReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  coldDrink: coldDrinkReducer,
  user: userReducer
});

export default rootReducer;
