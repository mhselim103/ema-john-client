import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
    const keys = Object.keys(savedCart);
    fetch("http://localhost:5000/products/bykeys", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        // console.log(products);
        const storedCart = [];
        if (products.length) {
          for (const key in savedCart) {
            const addedProducts = products.find(
              (product) => product.key === key
            );
            if (addedProducts) {
              const quantity = savedCart[key];
              addedProducts.quantity = quantity;
              storedCart.push(addedProducts);
            }
          }
          setCart(storedCart);
        }
      });
  }, []);
  return [cart, setCart];
};

export default useCart;
