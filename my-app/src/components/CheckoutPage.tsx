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
      .then((data) => setClientSecret(data.clientSecret));
      
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
        return_url: `http://localhost:3000/Payment-success?amount=${amount}`, // Update with your actual success URL
      },
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed");
      setLoading(false);
    }
  };

  if(!clientSecret || !stripe || !elements){
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="inline-block w-8 h-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md max-w-md mx-auto py-10">

      {/* Render PaymentElement only if clientSecret is available */}
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button disabled={!stripe || loading} className="text-white p-5 w-full bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse">
       { !loading? ` Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
