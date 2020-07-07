import React from "react";
import { buyColdDrink } from "../redux";
import { connect } from "react-redux";

function ColdDrink(props) {
  return (
    <React.Fragment>
      <h3>total number of ColdDrink{props.numOfColdDrink}</h3>
      <button onClick={props.buyColdDrink}>Buy coldDrink</button>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return { numOfColdDrink: state.coldDrink.numOfColdDrink };
};

const mapDispatchToProps = dispatch => {
  return {
    buyColdDrink: () => dispatch(buyColdDrink())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColdDrink);
