import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducers } from "./reducers/cartReducers";
import {
  getProductReducers,
  getIndividualProductReducers,
} from "./reducers/productReducers";
const reducers = combineReducers({
  cart: cartReducers,
  getProduct: getProductReducers,
  getIndividualProduct: getIndividualProductReducers,
});
const middleWare = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
