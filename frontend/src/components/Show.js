import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";

function Show(props) {
  const { username } = props;
  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUser: () => dispatch(fetchUser()),
//   };
// };

export default connect(mapStateToProps)(Show);
