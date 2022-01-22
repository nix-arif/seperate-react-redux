import React from "react";
import { fetchUser } from "../redux";
import { connect } from "react-redux";

function Button(props) {
  const { fetchUser } = props;
  const handleLogin = () => {
    fetchUser();
  };
  return (
    <div>
      <button onClick={handleLogin}>Login Me</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(null, mapDispatchToProps)(Button);
