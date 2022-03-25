import React from "react";
import { connect } from "react-redux";

function Header() {
  return (
    <div>
      <h1>Counter App</h1>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    count: state.value,
  };
}

export default connect(mapStateToProps)(Header);
