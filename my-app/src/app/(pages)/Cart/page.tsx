import React from 'react';
import Image from 'next/image';
import PagesHeader from '@/components/PagesHeader';

const Cart = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

      {/* Cart 1st section */}
      <div>
        <PagesHeader name='Cart' title='Cart' />
      </div>

      {/* second section */}
      <div className='md:py-10 py-5 gap-5 md:w-[90%] w-[95%] flex flex-col md:flex-row justify-between mx-auto'>

        <table className="md:w-[60%] w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-[#FFF9E5] font-medium text-base md:h-[80px] h-[50px]">
            <tr className="md:p0">
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


        <div className='md:w-[393px] bg-[#FFF9E5] md:h-[390px] h-[320px] flex flex-col items-center'>
          <h1 className='mt-4 font-semibold text-[32px]'>Cart Totals</h1>

          <div className='flex justify-between md:p-16 px-5 py-8 w-[90%]'>
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