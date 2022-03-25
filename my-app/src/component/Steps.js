import React from "react";
import "../style/style.css";
import { updateState } from "../Store/action";

import { connect } from "react-redux";
import { updateState } from "../Store/action";
function Steps(props) {
  function handleClick(step) {
    props.dispatch(updateState(step));
  }
  return (
    <>
      <button
        className={props.step === 5 && "active"}
        onClick={() => handleClick(5)}
      >
        5
      </button>
      <button
        className={props.step === 10 && "active"}
        onClick={() => handleClick(10)}
      >
        10
      </button>
      <button
        className={props.step === 15 && "active"}
        onClick={() => handleClick(15)}
      >
        15
      </button>
    </>
  );
}

function mapStateProp(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStateProp)(Steps);
