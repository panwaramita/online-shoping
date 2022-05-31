import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./productScreen.css";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { useParams } from "react-router-dom";
function ProductScreen() {
  const history = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector((state) => state.getIndividualProduct);
  const { product, loading, error } = productDetails;

  const AddtoCartHandler = () => {
    console.log(product);
    dispatch(addToCart(product._id, qty));
    history("/cart");
  };
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  return (
    <div className='productScreen'>
      {loading ? (
        <h2>loading....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className='productScreen_left'>
            <div className='left_image'>
              <img src={product.imageUrl} alt='product_name'></img>
            </div>
            <div className='left_info'>
              <p className='left_name'>{product.name}</p>
              <p className=''>Price : ${product.price}</p>
              <p className=''>Description: {product.description}</p>
            </div>
          </div>
          <div className='productScreen_right'>
            <div className='right__info'>
              <p>
                Price:<span>${product.price}</span>
              </p>
              <p>
                <span>
                  Stauts:{" "}
                  <span>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </span>
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((k) => (
                    <option key={k + 1} value={k + 1}>
                      {k + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type='button' onClick={() => AddtoCartHandler()}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;
