import React from "react";
import "./cartItem.css";
import { Link } from "react-router-dom";
export const CartItem = ({ item, qtyChangeHandler, removeFrom }) => {
  return (
    <div className='cartitem'>
      <div className='cartitem_image'>
        <img src={item.imageUrl} alt='product_name'></img>
      </div>
      <Link to={`/product/${item.product}`} className='cartitem_name'>
        <p>{item.name} </p>
      </Link>
      <p className='cartitem__price'>${item.price}</p>
      <select
        className='cardItem__select'
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((k) => (
          <option key={k + 1} value={k + 1}>
            {k + 1}
          </option>
        ))}
      </select>
      <button
        className='cartitem__deleteBtn'
        onClick={() => removeFrom(item.product)}
      >
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};
