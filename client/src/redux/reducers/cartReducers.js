import * as actionsTypes from "../constants/cartConstant";
const initalState = {
  cartItems: [],
};
export const cartReducers = (state = initalState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART: {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }

    case actionsTypes.REMOVE_FROM_CART: {
      console.log(action);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (ele) => ele.product !== action.payload.product
        ),
      };
    }

    default:
      return state;
  }
};
