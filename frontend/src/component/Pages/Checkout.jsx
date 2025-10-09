import React, { useEffect, useState } from "react";
import Form from "../Checkout/Form";
import CheckoutPrice from "../Checkout/CheckoutPrice";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "@/redux/Client/auth.store";
import { fetchCartProducts } from "@/redux/Client/cart.store";
import { shippingRates } from "@/redux/Client/shipping.store";
import { createCheckout } from "@/redux/Client/checkout.store";

const Checkout = () => {
  const { user, loading: userLoading } = useSelector((state) => state.auth);
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { checkout } = useSelector((state) => state.checkout);
  const { shipping } = useSelector((state) => state.shipping);
  console.log("User : ", user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
    dispatch(fetchCartProducts());
    dispatch(shippingRates());
  }, [dispatch]);
  console.log("Cart from Checkout : ", cart);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [selectedPayment, setSelectedPayment] = useState("COD");
  useEffect(() => {
    // Update formData when user data arrives
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        address: user.address || "",
      }));
    }
  }, [user]);
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Handle Place holder hit...");
    const orderData = {
      shippingAddress: {
        streetAddress: formData.address,
        city: formData.city,
        country: formData.country,
        postalCode: formData.postalCode,
      },
      products: cart.products,
      subTotal: cart.subTotal,
      paymentMethod: selectedPayment,
    };
    console.log("Order data : ", orderData);
    //axios call create checkout
    await dispatch(createCheckout(orderData));
  };
  console.log("Form Data FROM Checkout : ", formData);
  console.log("selectedPayment : ", selectedPayment);
  return (
    <div className="">
      <h1 className="text-2xl text-red-500 font-semibold">Billing Details</h1>
      <div className="flex items-center w-full flex-col md:flex-row gap-2">
        {/* User Info */}
        <div className="w-full md:w-[50%]">
          <Form
            formData={formData}
            setFormData={setFormData}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            handlePlaceOrder={handlePlaceOrder}
          />
        </div>
        {/* Product detail */}
        <div className="w-full md:w-[50%]">
          <CheckoutPrice
            cart={cart}
            loading={loading}
            error={error}
            shipping={shipping}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            handlePlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
