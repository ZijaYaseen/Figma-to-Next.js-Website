import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";

const Checkout = () => {
    return (
        <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

            {/* Contact 1st section */}

            <div
                className='bg-[url("/Rectangle1.svg")] bg-cover bg-center flex flex-col items-center justify-center h-[150px] lg:h-[318px] px-4'
            >
                <Image
                    src={"/Logo.svg"}
                    alt='logo'
                    width={60}
                    height={50}
                    className='w-[40px] h-[40px] sm:w-[50px] sm:h-[45px] lg:w-[60px] lg:h-[50px]'
                ></Image>

                <h1 className='font-medium text-3xl sm:text-4xl lg:text-5xl'>Checkout</h1>

                <div className='flex space-x-2 py-2 text-sm sm:text-base'>
                    <Link href={"/"}>
                        <h1 className='font-medium'>Home</h1>
                    </Link>
                    <RiArrowRightSLine
                        size={20}
                        className='sm:size-[24] lg:size-[24]'
                    />
                    <h1 className='font-light'>Checkout</h1>
                </div>
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
                                        className="mt-1 p-6 border border-[#9F9F9F] md:w-[211px] w-[160px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                        className="mt-1 p-6 border border-[#9F9F9F] md:w-[211px] w-[160px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
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
                                    className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px]  focus:outline-none"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <textarea
                                    rows={1}
                                    id="text"
                                    className="mt-10 p-6 border border-[#9F9F9F] md:w-[453px] h-[75px] rounded-[10px] focus:outline-none flex items-center"
                                    placeholder="Additional information"
                                    required
                                />
                            </div>

                        </div>

                        {/* Product / subtotal second div part.. */}

                        <div className='flex flex-col gap-4 md:w-[40%]'>

                            <div className='flex justify-between w-full border-b border-[#D9D9D9] md:pb-6 pb-3'>

                                <div className='flex flex-col justify-start gap-4 font-normal text-base'>
                                    <h1 className='font-medium text-2xl'>Product</h1>

                                    <div className='flex gap-3'>
                                        <p className='text-[#9F9F9F]'>Asgaard sofa</p>
                                        <p>*</p>
                                        <p>1</p>
                                    </div>

                                    <p>Subtotal</p>
                                    <p>Total</p>
                                </div>

                                <div className='flex flex-col justify-end gap-4 text-end font-light text-base'>
                                    <h1 className='font-medium text-2xl'>Subtotal</h1>

                                    <p>Rs. 250,000.00</p>
                                    <p>Rs. 250,000.00</p>
                                    <h2 className='font-bold text-2xl text-[#B88E2F]'>Rs. 250,000.00</h2>
                                </div>
                            </div>
                              
                              <div className='text-base font-normal'>

                                <div className='flex gap-4 items-center'>
                                    <p className='w-[14px] h-[14px] rounded-full bg-black'></p>
                                    <p>Direct Bank Transfer</p>
                                </div>
                                <p className='font-light text-[#9F9F9F] mt-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>

                                <div className='py-6 flex flex-col gap-3'>
                                <div className='flex gap-4 items-center text-[#9F9F9F]'>
                                    <p className='w-[14px] h-[14px] rounded-full border border-[#9F9F9F]'></p>
                                    <p>Direct Bank Transfer</p>
                                </div>

                                <div className='flex gap-4 items-center text-[#9F9F9F]'>
                                    <p className='w-[14px] h-[14px] rounded-full border border-[#9F9F9F]'></p>
                                    <p>Cash On Delivery</p>
                                </div>
                                </div>

                                <p className='font-extralight'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>

                              </div>

                              <button className='mt-4 flex justify-center mx-auto rounded-[15px] font-normal text-xl w-[318px] py-5 border border-black'>
                              Place order
                              </button>

                        </div>



                    </form>

                </div>

            </div>
        </div>
    )
}

export default Checkout