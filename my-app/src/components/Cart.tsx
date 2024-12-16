import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightSLine } from "react-icons/ri";

const Cart = () => {
    return (
        <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

            {/* Cart 1st section */}

            <div
                className='bg-[url("/Rectangle1.svg")] bg-cover bg-center flex flex-col items-center justify-center h-[318px] px-4'
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

            <table className="md:w-[60%] w-full border-collapse">
  {/* Table Header */}
  <thead className="bg-[#FFF9E5] font-medium text-base md:h-[80px] h-[50px]">
    <tr className="md:p-10">
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
    </tr>
  </thead>

  {/* Table Body */}
  <tbody>
    <tr className="border-b border-[#E5E5E5] text-[10px] md:text-base">
      {/* Product Image */}
      <td className="py-4 md:px-4 px-2">
  <div className="flex items-center gap-2 md:gap-4">
    <Image
      src="/CartAsgaardsofa4.svg"
      alt="Cart"
      width={100}
      height={100}
      className="bg-[#FBEBB5] md:w-[76px] w-[50px] md:h-[80px] h-[40px] md:rounded-[10px] rounded-sm"
    />
    <span className="text-[#9F9F9F]">Asgaard sofa</span>
  </div>
</td>


      {/* Product Name */}
      <td className="py-4 md:px-4 px-2 text-[#9F9F9F]">Rs. 250,000.00</td>

      {/* Quantity */}
      <td className="py-4 md:px-4 px-2">
        <div className="border border-[#9F9F9F] w-8 h-8 rounded-[5px] flex items-center justify-center text-black">
          1
        </div>
      </td>

      {/* Subtotal */}
      <td className="py-4 md:px-4 px-2 text-black">Rs. 250,000.00</td>
    </tr>
  </tbody>
</table>


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