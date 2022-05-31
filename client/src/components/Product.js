import React from "react";
import "./product.css";

import { Link } from "react-router-dom";
export const Product = ({
  imageUrl,
  price,
  description,
  name,
  countInStock,
  product_id,
}) => {
  return (
    <div className='product'>
      <img src={imageUrl} alt='product_name'></img>
      <div className='product__info'>
        <p className='info__name'>{name}</p>
        <p className='info__description'>{description}</p>
        <p className='info__price'>${price}</p>
        <Link to={`/product/${product_id}`} className='info__button'>
          View
        </Link>
      </div>
    </div>
  );
};
