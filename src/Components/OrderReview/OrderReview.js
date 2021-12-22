import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useproducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  // const [products] = useProducts();
  const [cart, setCart] = useCart();
  const handleRemove = (key) => {
    const newCart = cart.filter((pd) => pd.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <Link to="/placeorder">
          <button className="btn-primary">Place Order</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderReview;
