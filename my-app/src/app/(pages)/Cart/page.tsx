'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PagesHeader from '@/components/PagesHeader';
import { UseAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '@/redux/cartSlice';
interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string,
  quantity: number;
  imagePath: string;
}

const Cart = () => {
  const cartItems = UseAppSelector((state) => state.cart.items);

  const [selectCartItem, setSelectCartItem] = useState<IProduct | null>(null);

  // Calculate the total price for the selected product
  const selectedProductTotal = selectCartItem? selectCartItem.price * selectCartItem.quantity: 0;
  const selectedProductSubtotal = selectCartItem? selectCartItem.price : 0;

  const dispatch = useDispatch();

  const handleSelectProduct = (product: IProduct) => {
    setSelectCartItem(product); // Local state ke liye
    dispatch(setSelectedItem(product)); // Redux state ke liye
  };
  
  return (
    <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

      {/* Cart 1st section */}
      <div>
        <PagesHeader name='Cart' title='Cart' />
      </div>

      
      {cartItems.length === 0 ? (
      <div className='text-center items-center flex justify-center text-2xl font-bold h-[400px]'>Your cart is empty.</div>
    ) : (
    //  cart product deatails
      <div className='md:py-10 py-5 gap-5 md:w-[90%] w-[95%] flex flex-col md:flex-row justify-between mx-auto'>
    
        <table className="md:w-[60%] w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-[#FFF9E5] font-medium lg:text-base text-xs md:h-[80px] h-[50px]">
            <tr className="md:p0">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className='mt-5'>
            {cartItems.map((product)=>(
            <tr
            key={product.id}
            className={`border-b border-[#E5E5E5] text-[10px] md:text-base cursor-pointery ${
              selectCartItem?.id === product.id ? "border-yellow-500 bg-yellow-100" : ""
            }`}
            onClick={() => handleSelectProduct(product)}
          >
              {/* Product Image */}
              <td className="py-4 md:px-4 px-2">
                <div className="flex items-center gap-2 md:gap-4">
                  <Image
                    src={product.imagePath}
                    alt="Cart"
                    width={100}
                    height={100}
                    className="bg-[#FBEBB5] md:w-[76px] w-[50px] md:h-[80px] h-[40px] md:rounded-[10px] rounded-sm"
                  />
                  <span className="text-[#9F9F9F]">{product.name}</span>
                </div>
              </td>


              {/* Product Name */}
              <td className="py-4 md:px-4 px-2 text-[#9F9F9F]">$ {product.price} </td>

              {/* Quantity */}
              <td className="py-4 md:px-4 px-2">
                <div className="border border-[#9F9F9F] w-8 h-8 rounded-[5px] flex items-center justify-center text-black">
                  {product.quantity}
                </div>
              </td>

              {/* Subtotal */}
              <td className="py-4 md:px-4 px-2 text-black">$ {product.price * product.quantity}</td>
            </tr>
            ))}
          </tbody>
        </table>

         {/*  cart total box */}
        <div className='md:w-[393px] bg-[#FFF9E5] md:h-[390px] h-[320px] flex flex-col items-center'>
          <h1 className='mt-4 font-semibold text-[32px]'>Cart Totals</h1>

          <div className='flex justify-between md:p-16 px-5 py-8 w-[90%]'>
            <div className='flex flex-col gap-10 font-medium text-base'>
              <p>Price Of 1 Product</p>
              <p>Subtotal</p>
            </div>

            <div className='flex flex-col gap-10 font-medium text-base text-right'>
              <p className='text-base font-normal text-[#9F9F9F]'>
              ${selectedProductSubtotal.toFixed(2)}
              </p>
              <p className='text-xl font-medium text-[#B88E2F]'>
              ${selectedProductTotal.toFixed(2)}
              </p>
            </div>
          </div>

          <Link href={"Checkout"} className='flex justify-center mx-auto rounded-[15px] font-normal text-xl w-[222px] lg:py-5 py-3 border border-black'>
            Check Out
          </Link>
        </div>


      </div>
          )}

    </div>
  )
}

export default Cart