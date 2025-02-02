"use client";

import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import ConvertToSubcurrency from "@/lib/convertoSubcurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: ConvertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
          console.log("clientSecret fetched:", data.clientSecret);
        } else {
          console.error("No clientSecret in response:", data);
        }
      })
      .catch((err) => console.error("Error fetching clientSecret:", err));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet.");
      setLoading(false);
      return;
    }

    // Use stripe.confirmPayment for payment confirmation
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success", // Update with your actual success URL
      },
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md max-w-md mx-auto py-10">
      {/* Render PaymentElement only if clientSecret is available */}
      {clientSecret ? <PaymentElement /> : <p>Loading payment details...</p>}
      {errorMessage && <div>{errorMessage}</div>}
      <button disabled={!stripe || loading} className="text-white p-5 w-full bg-black mt-5">
        Pay ${amount}
      </button>
    </form>
  );
};

export default CheckoutPage;
