import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useproducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // useproducts and filtered products custoom hook
  const [products, filteredPd, setFilteredPd, pageCount, page, setPage] =
    useProducts();

  // usecart custom hook
  // const [cart, setCart] = useCart(products);
  const [cart, setCart] = useCart();

  // cart handling
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    // console.log(newCart);
    setCart(newCart);
    addToDb(product.key);
  };

  // search handling
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProduct = products?.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPd(matchedProduct);
    console.log(matchedProduct.length);
  };
  return (
    <div>
      <div className="search-container">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {filteredPd?.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
          <Link to="/review">
            <button className="btn-regular">Review Your Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
