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
            </div></div>
  )
}

export default Cart