import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: parseFloat(amount).toFixed(2), // 💰 set the amount here
                    //currency_code: "USD" // or change to your preferred currency
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(onSuccess);
          }}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButton;
