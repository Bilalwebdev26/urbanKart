import React, { useEffect, useState } from "react";
import Form from "../Checkout/Form";
import CheckoutPrice from "../Checkout/CheckoutPrice";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "@/redux/Client/auth.store";
import { fetchCartProducts } from "@/redux/Client/cart.store";
import { shippingRates } from "@/redux/Client/shipping.store";
import {
  createCheckout,
  finalizeCODOrder,
} from "@/redux/Client/checkout.store";
import { useNavigate } from "react-router-dom";
import { OrderSuccessToast } from "../Common/OrderConfigration";

const Checkout = () => {
  const { user, loading: userLoading } = useSelector((state) => state.auth);
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { checkout } = useSelector((state) => state.checkout);
  const { shipping } = useSelector((state) => state.shipping);
  const [checkoutId, setCheckoutId] = useState(null);
  const navigate = useNavigate();
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
  console.log("Checkout Id ", checkoutId);
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    console.log("Handle Place holder hit...");
    const orderData = {
      shippingAddress: {
        streetAddress: formData.address,
        city: formData.city,
        country: formData.country,
        postalCode: formData.postalCode,
      },
      products: cart.products,
      subTotal: cart.totalPrice,
      paymentMethod: selectedPayment,
    };
    console.log("Order data : ", orderData);
    try {
      const res = await dispatch(createCheckout(orderData));
      console.log("New Checkout Res : ", res);
      if (res.payload && res.payload._id) {
        setCheckoutId(res.payload._id);
      }
      if (selectedPayment === "COD") {
        //than call cashondeleivery fn controller
        if (!checkoutId) {
          setCheckoutId(res.payload._id);
        }
        try {
          const result = await dispatch(finalizeCODOrder(res.payload._id));
          console.log("COD order created successFully : ", result);
          console.log("Order Id : ", result.payload.order._id);
          navigate(
            `/user/order/order-configration/${result.payload.order._id}`,
            {
              state: { order: result.payload.order }, // 👈 Pass full order object here
            }
          );
          if (result.meta.requestStatus === "fulfilled") {
            OrderSuccessToast("COD order created successfully!");
          }
        } catch (error) {
          console.log("Error while creating cod order : ", error);
        }
      } else if (selectedPayment === "PayPal") {
        //paypal se pay hoga
      }
    } catch (error) {
      console.log("Error while creating Checkout :", error);
    }
    //axios call create checkout
  };
  // const createOrder = () => {
  //   try {
  //     // if(selectedPayment === "COD"){
  //     //   //than call cashondeleivery fn controller
  //     //   const res =
  //     // }
  //   } catch (error) {}
  // };
  console.log("Form Data FROM Checkout : ", formData);
  console.log("selectedPayment : ", selectedPayment);
  return (
    <div className="">
      <h1 className="text-2xl text-red-500 font-semibold">Billing Details</h1>
      <div className="flex items-center w-full flex-col sm:flex-row gap-2">
        {/* User Info */}
        <div className="w-full sm:w-[50%]">
          <Form
            formData={formData}
            setFormData={setFormData}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            handlePlaceOrder={handlePlaceOrder}
          />
        </div>
        {/* Product detail */}
        <div className="w-full sm:w-[50%]">
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
