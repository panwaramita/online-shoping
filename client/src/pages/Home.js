import React, { useEffect } from "react";
import { Product } from "../components/Product";
import "./home.css";

import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../redux/actions/productActions";

function Home() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProduct);
  console.log(getProducts);
  const { product, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
    console.log("hi");
  }, [dispatch]);
  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'>Latest Products</h2>
      <div className='homescrenn_products'>
        {loading ? (
          <h2>loading...</h2>
        ) : error ? (
          <h2>error</h2>
        ) : (
          product.map((ele) => (
            <Product
              key={ele._id}
              product_id={ele._id}
              name={ele.name}
              imageUrl={ele.imageUrl}
              description={ele.description}
              price={ele.price}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
