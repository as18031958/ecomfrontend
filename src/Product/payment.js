import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from "../Store/slice";

const Payment = () => {
  const cartItems = useSelector(state => state.product.cart);
  const dispatch = useDispatch();
  const total = useSelector(state => state.product.total);
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("https://ecombackend-qgpr.onrender.com/api/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.error("Error fetching client token:", error);
      // Handle error appropriately (e.g., display a message)
    }
  };

  // Handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      await axios.post("https://ecombackend-qgpr.onrender.com/api/braintree/payment", {
        nonce,
        cartItems,
      });

      setLoading(false);
      // Clear cartItems or update state as needed
      localStorage.removeItem("cartItems");
      dispatch(removeFromCart([]));
      setTimeout(() => {
        navigate("/");
        // toast.dismiss(toastId);
      }, 1000);
      // navigate("/");
      toast.success("Payment Completed Successfully");
    } catch (error) {
      console.error("Error processing payment:", error);
      setLoading(false);
      // Handle error appropriately (e.g., display a message)
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      <Layout>
        {/* ... content */}
        {/* Conditional rendering based on auth, cartItems, and payment state */}
        {cartItems?.length > 0 && (
          <div className="row">
            <div className="col-md-8">
              <div className="row mb-2 p-3 card flex-row" key={cartItems[0]._id}>
                <div className="col-md-4">
                  {/* Product image */}
                </div>
                <div className="col-md-4 text-center">
                  <h2>Cart Summary</h2>
                  <p>Total | Checkout | Payment</p>
                  <hr />
                  <h4>Total: {total}</h4>
                  {/* Address display and update button */}
                </div>
                {clientToken && (
                  <div className="mt-2">
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: { flow: "vault" },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={loading || !instance}
                    >
                      {loading ? "Processing..." : "Make Payment"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Payment;
