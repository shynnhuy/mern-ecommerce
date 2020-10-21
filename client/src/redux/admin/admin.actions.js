import * as AdminTypes from "./admin.types";
import Api from "Api";
import { enqueueSnackbar } from "redux/snackbar/snackbar.actions";
import { updateToken } from "redux/auth/auth.actions";
import { isExpired, getExpirationDate } from "redux/auth/auth.helper";

export const tokenConfig = async (dispatch, getState) => {
  const token =
    getState().auth.token || JSON.parse(sessionStorage.getItem("token"));
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (!token) {
    return config;
  }

  // console.log(token.accessToken);
  // console.log(getExpirationDate(token.accessToken));
  // console.log(isExpired(getExpirationDate(token.accessToken)));

  if (isExpired(getExpirationDate(token.accessToken))) {
    dispatch(updateToken());
  }
  config.headers["Authorization"] = `Bearer ${token.accessToken}`;
  return config;
};

export const getAllUsers = () => (dispatch, getState) => {
  // Api.get("/auth/users", tokenConfig(dispatch, getState))
    Api.get("/auth/users")
    .then((res) => {
      dispatch({
        type: AdminTypes.GET_ALL_USERS,
        payload: res.data,
      });
      dispatch(
        enqueueSnackbar({ message: "All users are loaded", status: "success" })
      );
    })
    .catch((err) => {
      dispatch(
        enqueueSnackbar({
          message: err.response?.data.message || "Get all users error!",
          status: "error",
        })
      );
    });
};
