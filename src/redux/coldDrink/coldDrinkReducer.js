import { buyColdDrink } from "./coldDrinkActions";
import { BUY_COLDDRINK } from "./coldDrinkTypes";

const initialState = {
  numOfColdDrink: 15
};
const coldDrinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COLDDRINK:
      return {
        ...state,
        numOfColdDrink: state.numOfColdDrink - 1
      };
    default:
      return state;
  }
};
export default coldDrinkReducer;
