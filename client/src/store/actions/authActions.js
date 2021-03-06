import axios from "axios";
import { returnErrors } from "./errorActions";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: "USER_LOADING" });

  axios
    .get("/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "AUTH_ERROR",
      });
    });
};

// Register user
export const register = ({ name, email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post("/users", body, config)
    .then((res) =>
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: "REGISTER_FAIL",
      });
    });
};

// LogIn user
export const logIn = ({ email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/auth", body, config)
    .then((res) =>
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: "LOGIN_FAIL",
      });
    });
};

// LogOut user
export const logOut = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};

// Setup config/headers and token

export const tokenConfig = (getState) => {
  // Get token from local storage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "aplication/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
