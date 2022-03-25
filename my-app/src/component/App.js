import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { increment, decrement, reset } from "../Store/action";
import Steps from "./Steps";

function App(props) {
  return (
    <>
      <div>
        <Header />
        <div>{props.count}</div>
        <button onClick={() => props.dispatch(increment())}>Increment</button>
        <button onClick={() => props.dispatch(decrement())}>Decrement</button>
        <button onClick={() => props.dispatch(reset())}>Reset</button>
      </div>

      <Steps />
    </>
  );
}

function getState(state) {
  return {
    count: state.value,
  };
}

export default connect(getState)(App);
