"use client"

import { removeFromCart } from '@/redux/cartSlice';
import { UseAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';

const CartSidebar =({ CartmenuOpen, CartsetMenuOpen }: { CartmenuOpen: boolean, CartsetMenuOpen: (open: boolean) => void }) => {
 

    // Function to close the menu when a link is clicked
    const CarthandleLinkClick = () => {
      CartsetMenuOpen(false); // Close the menu on link click
    };
  
    //  add to cart functionality
    const cartItems = UseAppSelector((state) =>
      state.cart.items
    );
    const cartTotal = cartItems.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  
    const dispatch = useDispatch()
  
    const handleRemove = (id: string) => {
      dispatch(removeFromCart(id));
    };
  return (
    <div>
         {/* ShoppingCart icon... */}
                <div
                onClick={() => {
                    console.log("Cart Opened!");
                    CartsetMenuOpen(true); // Open the cart
                    
                  }}
                 className="cursor-pointer z-[100]" >
        
                </div>

                {CartmenuOpen && (
       <div className={`absolute top-0 bottom-0 md:w-[30%] right-0 w-[75%] max-h-full bg-white shadow-lg z-[100] flex flex-col`}>
       <div className="flex flex-col space-y-5 text-start md:p-8 p-4">
         {/* Header */}
         <div className="flex justify-between">
           <h1 className="p-1 border-b border-[#D9D9D9] font-semibold md:text-2xl text-lg">Shopping Cart</h1>
           <MdClose
             size={24}
             className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8"
             onClick={() => CartsetMenuOpen(false)}
           />
         </div>
     
         {/* Cart Items - Scrollable */}
         <div className="flex-1 overflow-y-auto max-h-[calc(100vh-240px)] px-2">
           {cartItems.length === 0 ? (
             <div className='text-center flex items-center justify-center lg:text-2xl text-lg font-bold h-[400px]'>
               Your cart is empty.
             </div>
           ) : (
             cartItems.map((product, index) => (
               <div key={index} className="flex flex-col gap-4 border-b py-5">
                 <div className="flex items-center gap-4">
                   <Link href={`Shop/${product.id}`} onClick={CarthandleLinkClick} className="flex items-center lg:gap-4 gap-2">
                     <Image
                       src={product.imagePath}
                       alt="Cart"
                       width={100}
                       height={100}
                       className="bg-[#FBEBB5] md:w-[76px] w-[50px] md:h-[80px] h-[50px] md:rounded-[10px] rounded-sm"
                     />
                     <div className="flex flex-col text-left lg:gap-2 gap-1">
                       <p className="lg:text-lg text-xs font-semibold">{product.name}</p>
                       <div className="flex items-center lg:gap-4 gap-1 text-xs">
                         <p>Quantity: {product.quantity}</p>
                         <MdClose size={12} />
                         <span className="text-[#B88E2F] font-bold">${product.price}</span>
                       </div>
                     </div>
                   </Link>
                   <MdClose
                     size={25}
                     color="white"
                     className="ml-auto bg-gray-400 w-6 h-6 border-4 border-gray-400 rounded-full cursor-pointer"
                     onClick={() => handleRemove(product.id)}
                   />
                 </div>
                 <div className="flex justify-between">
                   <p className="text-sm font-medium">Subtotal</p>
                   <p className="text-[#B88E2F] font-bold">${product.price * product.quantity}</p>
                 </div>
               </div>
             ))
           )}
         </div>
     
         {/* Fixed Buttons */}
         <div className='absolute bottom-0 left-0 right-0 '>
         <div className='p-3 px-8 items-center flex justify-between'>
          <h2 className='text-2xl font-semibold'>Total</h2>
          <p className='text-[#B88E2F] font-bold text-xl'>${cartTotal}</p>
         </div>
         <div className="p-4 bg-white shadow-lg border-t border-[#D9D9D9] flex justify-between gap-2">
           <Link href={"/Cart"} className="w-36 h-10 flex justify-center items-center font-medium text-base border border-black rounded-[18px] hover:text-white hover:bg-black" onClick={CarthandleLinkClick}>
             View Cart
           </Link>
           <Link href={"/Checkout"} className="w-36 h-10 flex justify-center items-center font-medium text-base border border-black rounded-[18px] hover:text-white hover:bg-black" onClick={CarthandleLinkClick}>
             Checkout
           </Link>
           
         </div>

        
         </div>

         
       </div>
     </div>
     

      )}
    </div>
  )
}

export default CartSidebar