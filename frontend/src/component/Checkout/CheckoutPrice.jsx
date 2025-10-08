import { fetchCartProducts } from "@/redux/Client/cart.store.js";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const CheckoutPrice = () => {
  const { cart, loading, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);
  console.log("Cart from Checkout : ", cart.products);
  return (
    <div>
      <div className="border p-2">
        {loading ? (
          <div className="">Loading</div>
        ) : (
          <div className="">
            {Array.isArray(cart?.products) &&
              cart?.products.map((prod) => (
                <div className="" key={prod.productId}>
                 <div>
                     <img
                    src={prod.images}
                    alt={prod.name}
                    className="h-15 w-15"
                  />
                  <h2>{prod.name.slice(0,14)}..</h2>
                 </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPrice;
