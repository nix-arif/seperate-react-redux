import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";
import Axios from "axios";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error.message,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    Axios.post("/login")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data.username));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchUserFailure(error));
      });
  };
};
