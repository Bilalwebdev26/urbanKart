import { CheckLine, CreditCard } from "lucide-react";
import React from "react";
import PayPalButton from "../Payment/PayPalButton";

const Form = ({
  formData,
  setFormData,
  selectedPayment,
  setSelectedPayment,
  handlePlaceOrder,
  cart,
  handlePaymentSuccess,
  checkoutId,
}) => {
  // const checkoutId = 1;
  console.log("checkoutId from Form.jsx: ", checkoutId);
  return (
    <div className="border rounded-md p-3 ">
      <div className="flex flex-col">
        <form onSubmit={handlePlaceOrder} className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <label htmlFor="" className="checkout-label">
              Name
            </label>
            <input
              type="text"
              className="checkout-input cursor-not-allowed"
              value={formData?.name}
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="checkout-label">
              Email
            </label>
            <input
              type="text"
              className="checkout-input cursor-not-allowed"
              value={formData?.email}
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="checkout-label">
              Address
            </label>
            <input
              type="text"
              className="checkout-input"
              value={formData.address || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, address: e.target.value }))
              }
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="checkout-label">
              City
            </label>
            <input
              type="text"
              className="checkout-input"
              value={formData.city || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, city: e.target.value }))
              }
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="checkout-label">
              Country
            </label>
            <input
              type="text"
              className="checkout-input"
              value={formData.country || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, country: e.target.value }))
              }
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="checkout-label">
              Postal Code
            </label>
            <input
              type="text"
              className="checkout-input"
              value={formData.postalCode || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, postalCode: e.target.value }))
              }
              required
            />
          </div>
          {/* Conditional Button */}
          <div className="mt-4">
            {selectedPayment === "COD" && (
              <div className="flex justify-end mb-3">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full transition-all duration-150 hover:scale-95 hover:bg-red-700 gap-2 cursor-pointer bg-red-500 text-white p-2 rounded"
                >
                  <CheckLine className="size-5" />
                  <span className="">Place Order</span>
                </button>
              </div>
            )}

            {/* {selectedPayment === "PayPal" &&
              {
                !checkoutId?(<></>):(<></>)
              }
            } */}
            {selectedPayment === "PayPal" &&
              (!checkoutId ? (
                <button
                  type="submit" // 👈 Create checkout first
                  className="bg-yellow-500 flex items-center justify-center gap-2 text-white p-2 rounded w-full hover:bg-yellow-600 transition"
                >
                  <CreditCard className="size-5" />
                  <span> Pay with PayPal</span>
                </button>
              ) : (
                <PayPalButton
                  amount={(cart?.totalPrice || 0) + 100}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment failed. Try again")}
                />
              ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
