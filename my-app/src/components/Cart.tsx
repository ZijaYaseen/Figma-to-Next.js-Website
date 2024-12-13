import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightSLine } from "react-icons/ri";

const Cart = () => {
    return (
        <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

            {/* Cart 1st section */}

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

                <h1 className='font-medium text-3xl sm:text-4xl lg:text-5xl'>Cart</h1>

                <div className='flex space-x-2 py-2 text-sm sm:text-base'>
                    <Link href={"/"}>
                        <h1 className='font-medium'>Home</h1>
                    </Link>
                    <RiArrowRightSLine
                        size={20}
                        className='sm:size-[24] lg:size-[24]'
                    />
                    <h1 className='font-light'>Cart</h1>
                </div>
            </div>
            {/* second section */}
            <div className='md:py-10 py-5 gap-5 md:w-[90%] w-[95%] flex flex-col md:flex-row justify-between mx-auto'>

                <div className='flex md:flex-col flex-row gap-8 w-[60%]'>

                    <div className='flex md:flex-row flex-col items-center gap-5 md:gap-0 py-4 bg-[#FFF9E5] font-medium text-base md:pl-[90px] p-5'>
                        <p className='md:w-[300px]'>Product</p>
                        <p className='md:w-[300px]'>Price</p>
                        <p className='md:w-[200px]'>Quantity</p>
                        <p className='md:w-[300px]'>Subtotal</p>
                    </div>

                    <div className='flex gap-1 md:items-center'>
                        <Image src={"/CartAsgaardsofa4.svg"} alt='Cart' width={100} height={100}
                            className="bg-[#FBEBB5] hidden md:block w-[76px] md:h-[80px] h-[20px] md:rounded-[10px] rounded-sm">

                        </Image>
                        <div className='flex font-normal text-base text-[#9F9F9F] md:flex-row flex-col gap-5 md:gap-0 p-3'>
                            <p className='w-[180px]'>Asgaard sofa</p>
                            <p className='w-[190px]'>Rs. 250,000.00</p>
                            <p className='border border-[#9F9F9F] w-8 h-8 rounded-[5px] flex items-center justify-center text-black'>1</p>
                            <p className='w-[150px] md:ml-[76px] text-black'>Rs. 250,000.00</p>
                        </div>
                    </div>

                </div>

                <div className='md:w-[393px] bg-[#FFF9E5] md:h-[390px] h-[290px] flex flex-col items-center'>
                    <h1 className='mt-4 font-semibold text-[32px]'>Cart Totals</h1>

                    <div className='flex justify-between md:p-16 p-5 w-[95%]'>
                        <div className='flex flex-col gap-10 font-medium text-base'>
                            <p>Subtotal</p>
                            <p>Total</p>
                        </div>

                        <div className='flex flex-col gap-10 font-medium text-base text-right'>
                            <p className='text-base font-normal text-[#9F9F9F]'>Rs. 250,000.00</p>
                            <p className='text-xl font-medium text-[#B88E2F]'>Rs. 250,000.00</p>
                        </div>
                    </div>

                    <button className='flex justify-center mx-auto rounded-[15px] font-normal text-xl w-[222px] py-5 border border-black'>
                        Check Out
                    </button>
                </div>


            </div>

        </div>
    )
}

export default Cart