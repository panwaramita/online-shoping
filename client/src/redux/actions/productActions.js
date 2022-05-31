import * as actionTypes from "../constants/productConstant";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get("/api/products");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    console.log("hi");
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
