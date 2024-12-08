import React from 'react'
import Image from 'next/image'
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { CiGrid31 } from "react-icons/ci";
const Shop = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full h-screen mt-[90px]' >

        {/* Shop 1st section */}

        <div className='bg-[url("/Rectangle1.svg")] bg-cover bg-center flex flex-col items-center justify-center h-[318px]'>
        <Image src={"/Meubel House_Logos-05.svg"}
        alt='logo'
        width={50}
        height={50}
        />

        <h1 className='font-medium text-5xl'>Shop</h1>

        <div className='flex space-x-2 py-2  '>
            <h1 className='text-base font-medium '>Home</h1>
            <RiArrowRightSLine size={24}/>
            <h1 className='text-base font-light'>Shop</h1>
        </div>
        </div>

        {/* shop 2nd section  */}

        <div className='bg-[#FAF4F4] h-[100px] mt-10 mx-auto flex justify-between' >

          <div className='flex'>
            <LiaSlidersHSolid />
            Filter
            <BsFillGridFill />
            <CiGrid31 />
            </div>
            
        </div>

    </div>
  )
}

export default Shop