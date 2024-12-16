"use client";
import useState

import { MdClose } from "react-icons/md"; // Close icon from react-icons/md
import Link from "next/link";
import Image from "next/image";

const CartSidebar = () => {
     const [CartmenuOpen, CartsetMenuOpen] = useState(false);
    
      // Function to close the menu when a link is clicked
      const CarthandleLinkClick = () => {
        CartsetMenuOpen(false); // Close the menu on link click
      };
  return (
    <div className="absolute top-0 md:w-[30%] right-0 w-[75%] h-screen bg-white shadow-lg">
    <div className="flex flex-col space-y-5 text-start md:p-8 p-4">
    <div className="relative">
      <h1 className="absolute left-0 p-3 border-b border-[#D9D9D9] font-semibold md:text-2xl text-lg">Shopping Cart</h1>
      <MdClose size={28} className="absolute top-3 right-0" onClick={CarthandleLinkClick}/>
      </div>
     <div className="flex items-center gap-2 md:gap-4 absolute top-28">
         <Image
           src="/CartAsgaardsofa4.svg"
           alt="Cart"
           width={100}
           height={100}
           className="bg-[#FBEBB5] md:w-[76px] w-[50px] md:h-[80px] h-[50px] md:rounded-[10px] rounded-sm"
         />
         <div className="flex flex-col  text-left gap-2">
          <p>Asgaard sofa
          </p>
          <div className="flex gap-4">
            1 
            <MdClose size={15} className="mt-1"/>
            <span className="text-[#B88E2F]">Rs.250,000.00</span>
          </div>
          </div>
          <MdClose size={25} color="white" className="ml-10 bg-gray-400 w-6 h-6 border-4 border-gray-400 rounded-full justify-end flex"/>
       </div>
       <div className="absolute bottom-5 right-2 left-2 flex gap-5 md:p-6 py-4 border-t border-[#D9D9D9]">
        <Link href={"/Cart"} className="w-36 h-10 flex justify-center items-center font-medium  text-base border border-black rounded-[18px] hover:text-white hover:bg-black">
        View Cart
        </Link>

        <Link href={"/Checkout"} className="w-36 h-10 justify-center items-center flex font-medium text-base border border-black rounded-[18px] hover:text-white hover:bg-black">
        Checkout
        </Link>
       </div>
         
       <div className="flex absolute justify-between bottom-32 w-[80%] ">
       <p>Subtotal</p>
       <p className="text-[#B88E2F]">250,000.00</p>
       </div>
    </div>
    
  </div>
  )
}

export default CartSidebar