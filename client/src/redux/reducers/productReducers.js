import * as actionTypes from "../constants/productConstant";
const intialState = {
  product: [],
};
export const getProductReducers = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        product: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const individualState = {
  product: {},
};

export const getIndividualProductReducers = (
  state = individualState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
