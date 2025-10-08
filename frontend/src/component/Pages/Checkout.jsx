import React from "react";
import Form from "../Checkout/Form";
import CheckoutPrice from "../Checkout/CheckoutPrice";

const Checkout = () => {
  return (
    <div className="flex items-center w-full">
      {/* User Info */}
      <div className="w-full md:w-[50%]">
        <Form />
      </div>
      {/* Product detail */}
     <div className="w-full md:w-[50%]">
        <CheckoutPrice />
      </div>
    </div>
  );
};

export default Checkout;
