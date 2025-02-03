"use client";

import React from 'react'
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import ConvertToSubcurrency from '@/lib/convertoSubcurrency';
import CheckoutPage from '@/components/CheckoutPage';
import { UseAppSelector } from '@/redux/hooks';
import PagesHeader from '@/components/PagesHeader';

if(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
    throw new Error ("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is undefined")
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) 
 
const Stripe = () => {
  const cartItems = UseAppSelector((state) => state.cart.items);
      const cartTotal = cartItems.reduce((acc, product) => acc + (product.price * product.quantity), 0);
      

  return (
    <main className='lg:mt-[90px] '>
        <div>
          <PagesHeader name='Payment' title='Payment' />
        </div>
    <Elements stripe={stripePromise}
    options={{
        mode:"payment",
        amount:ConvertToSubcurrency(cartTotal), // cents
        currency:"usd",
    }}
    >

         <CheckoutPage amount = {cartTotal}/>
    </Elements>
  
    </main>
  )
}

export default Stripe