import React from "react";
import { fetchUser } from "../redux";
import { connect } from "react-redux";

function User(props) {
  const { username, fetchUser } = props;
  const handleLogin = () => {
    fetchUser();
  };
  return (
    <div>
      <h1>{username}</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
