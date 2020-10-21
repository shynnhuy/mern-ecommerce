import Api from "Api";
import { enqueueSnackbar } from "redux/snackbar/snackbar.actions";
import {
  ADD_CATEGORY,
  LOADED_CATEGORY,
  LOADED_REQUESTS,
  UPDATED_REQUEST,
} from "./shop.types";
export const getCategories = () => (dispatch) => {
  Api.get("/product/category")
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: LOADED_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getRequests = () => (dispatch) => {
  Api.get("/shop/requests")
    .then((res) => {
      // console.log(res.data);
      dispatch({
        type: LOADED_REQUESTS,
        payload: res.data,
      });
      dispatch(
        enqueueSnackbar({ message: "All requests are loaded", status: "success" })
      );
    })
    .catch((err) => {
      dispatch(
        enqueueSnackbar({
          message: err.response?.data.message || "Get all requests error!",
          status: "error",
        })
      );
    });
};

export const addCategory = (newCategory) => (dispatch) => {
  Api.post("/product/createCategory", newCategory)
    .then((res) => {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data.result,
      });
      dispatch(
        enqueueSnackbar({ message: res.data.message, status: "success" })
      );
    })
    .catch((err) => {
      dispatch(
        enqueueSnackbar({
          message: err.response?.data.message || "Add category error!",
          status: "error",
        })
      );
    });
};

export const changeRequestStatus = (id, status = "pending") => (dispatch) => {
  Api.patch(`/shop/request/${id}`, { status })
    .then((res) => {
      dispatch({
        type: UPDATED_REQUEST,
        id,
        payload: res.data.result,
      });
      dispatch(
        enqueueSnackbar({ message: res.data.message, status: "success" })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
