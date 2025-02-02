"use client";
import PagesHeader from '@/components/PagesHeader';
import { UseAppSelector } from '@/redux/hooks';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const Checkout = () => {

    const cartItems = UseAppSelector((state) => state.cart.items);
    const cartTotal = cartItems.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const [paymentMethod, setpaymentMethod] = useState("bank")
     
    const router = useRouter()
    const handlePlaceOrder = () => {
        if (paymentMethod === "bank") {
          router.push("/Payment");
        } else if (paymentMethod === "cod") {
          alert("Your order has been placed successfully!");
        }
      };
     // Handle the case when cartItems is null
     if (cartItems === null) {
        return (
            <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]'>
              <PagesHeader name='Checkout' title='Checkout' />
            
            <div className='text-center items-center flex justify-center lg:text-xl text-base font-semibold h-[400px]'>
                Your cart is empty! Please add items before proceeding to checkout.
            </div>
            </div>
        );
    }

    return (
        <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

            {/* Checkout 1st section */}

            <div>
              <PagesHeader name='Checkout' title='Checkout' />
            </div>
    
            {/* Billing Details */}
            <div className="flex flex-col md:flex-row justify-between md:w-[85%] w-[90%] mx-auto md:py-20 py-10 gap-10">

                {/* Login in Section */}
                <div className="flex flex-col gap-8 w-full mx-auto">
                    <h1 className="font-semibold text-4xl">Billing details</h1>

                    <form action="post" className="flex justify-between w-full flex-col md:flex-row gap-7">

                        <div className='flex flex-col gap-7'>

                            <div className='flex md:gap-8 gap-3'>
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="text" className="text-base font-medium">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="text"
                                        name="username"
                                        className="mt-1 p-6 border border-[#9F9F9F] lg:w-[211px] w-[150px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                        placeholder=""
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="text" className="text-base font-medium">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="text"
                                        name="username"
                                        className="mt-1 p-6 border border-[#9F9F9F] lg:w-[211px] w-[150px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                        placeholder=""
                                        required
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    Company Name (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="Company Name"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder=""
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    Country / Region
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="Country / Region"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder="Sri Lanka"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    Street address
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="Street Address"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    Town / City
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="Town / City"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    Province
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="Province"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder="Western Province"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    ZIP code
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="ZIP code"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="Phone"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label htmlFor="text" className="text-base font-medium">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="text"
                                    name="Email"
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <textarea
                                    rows={1}
                                    id="text"
                                    className="mt-10 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px]  rounded-[10px] focus:outline-none flex items-center"
                                    placeholder="Additional information"
                                    required
                                />
                            </div>

                        </div>

                        {/* Product / subtotal second div part.. */}

                        <div className='flex flex-col gap-4 md:w-[40%]'>

                           {cartItems.map((product) =>(
                             <div className='flex justify-between w-full border-b border-[#D9D9D9] md:pb-6 pb-3'>

                             <div className='flex flex-col justify-start gap-4 font-normal text-base'>
                                 <h1 className='font-medium text-2xl'>Product</h1>

                                 <div className='flex gap-3 items-center'>
                                     <p className='text-[#9F9F9F]'>
                                         {product.name}
                                     </p>
                                     <MdClose size={15} />
                                     <p>
                                         {product.quantity}
                                     </p>
                                 </div>
                                 <p>Subtotal</p>
                                 
                             </div>

                             <div className='flex flex-col justify-end gap-4 text-end font-light text-base'>
                                 <h1 className='font-medium text-2xl'>Subtotal</h1>

                                 <p>${product.price * product.quantity}</p>
                                 <h2>${product.price * product.quantity}</h2>
                             </div>
                               

                         </div>
                           ))}

                           {/* Total */}
                           <div className='flex  justify-between text-end font-light text-base'>

                                 <h1 className='font-medium text-2xl'>Total</h1>
                                 <h2 className='font-bold text-2xl text-[#B88E2F]'>${cartTotal}</h2>
                             </div>
                              
                              <div className='text-base font-normal'>

                                <div className='flex gap-4 items-center'>
                                    <p className='w-[14px] h-[14px] rounded-full bg-black'></p>
                                    <p>{paymentMethod=== "bank" ? "Direct Bank Transfer": "Cash On Delivery"}</p>
                                    
                                </div>
                                <p className='font-light text-[#9F9F9F] mt-3'>
                                    {paymentMethod === "bank"? "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.": "Pay with cash when your order is delivered. Ensure you have the exact amount ready as change may not be available."}
                                    
                                </p>

                                <div className='py-6 flex flex-col gap-3 cursor-pointer'>
                                <div onClick={() => (setpaymentMethod("bank"))}
                                 className={`flex gap-4 items-center ${paymentMethod==="bank"? "text-black" : "text-[#9F9F9F]"} `}>
                                    <p className={`w-[14px] h-[14px] rounded-full border ${paymentMethod === "bank" ? "border-black bg-black" :"border-[#9F9F9F]"} `}></p>
                                    <p>Direct Bank Transfer</p>
                                </div>

                                <div onClick={() => (setpaymentMethod("cod"))}
                                 className={`flex gap-4 items-center ${paymentMethod==="cod"? "text-black" : "text-[#9F9F9F]"} cursor-pointer`}>
                                    <p className={`w-[14px] h-[14px] rounded-full border ${paymentMethod === "cod" ?  "border-black bg-black" :"border-[#9F9F9F]"}`}></p>
                                    <p>Cash On Delivery</p>
                                </div>
                                </div>

                                <p className='font-extralight'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>

                              </div>

                              <button onClick={handlePlaceOrder} className='mt-4 flex justify-center mx-auto rounded-[15px] font-normal text-xl lg:w-[318px] w-[280px] lg:py-5 py-3 border border-black'>
                              Place order
                              </button>

                              {paymentMethod === "bank" }

                        </div>



                    </form>

                </div>

            </div>
           
        
        </div>
    )
}

export default Checkout