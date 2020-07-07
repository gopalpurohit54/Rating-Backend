import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

export default function HooksIceCreamContainer() {
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No. of icecream {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy cake</button>
    </div>
  );
}
