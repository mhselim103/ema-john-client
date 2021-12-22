import React from "react";
// import { useHistory } from "react-router-dom";

const Cart = (props) => {
  // const history = useHistory();
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const tax = total * 0.1;
  const grandTotal = total + tax;

  /* const handleReview = () => {
        history.push('/review')
    } */

  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Item Ordered:{totalQuantity}</h5>
      <h3>Total:{total.toFixed(2)}</h3>
      <h4>Tax:{tax.toFixed(2)} </h4>
      <h4>Grand Total:{grandTotal.toFixed(2)} </h4>
      {/* 
            <button onClick={()=>handleReview()} className="purchase-button">Review Order</button> */}
    </div>
  );
};

export default Cart;
