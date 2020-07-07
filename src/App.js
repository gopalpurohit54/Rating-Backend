import React from "react";
import "./App.css";
import Cake from "./components/cakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksIceCreamContainer from "./components/iceCreamContainer";
import ColdDrink from "./components/coldDrink";
import ItemContainer from "./components/itemContainer/itemContainer";
import UserContainer from "./components/userContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>hello</h1>
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksIceCreamContainer />
        <Cake />
        <ColdDrink />
      </div>
    </Provider>
  );
}

export default App;
