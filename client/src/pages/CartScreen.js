import React, { useEffect } from "react";
import { CartItem } from "../components/CartItem";
import "./cartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, RemoveFromCart } from "../redux/actions/cartActions";

export const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFrom = (id) => {
    dispatch(RemoveFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className='cartScreen'>
      <div className='cartscreen__left'>
        <h2>Shopping Cart</h2>
        {cartItems.length == 0 ? (
          <div>
            Your cart is empty<Link to='/'>Go Back</Link>
          </div>
        ) : (
          cartItems.map((ele) => (
            <CartItem
              key={ele._id}
              item={ele}
              qtyChangeHandler={qtyChangeHandler}
              removeFrom={removeFrom}
            />
          ))
        )}
      </div>
      <div className='cartscreen__right'>
        <div className='cartsreen_info'>
          <p>Subtotal:{getCartCount()}</p>
          <p>$:{getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};
