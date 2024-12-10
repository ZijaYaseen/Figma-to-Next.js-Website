import Image from 'next/image'
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { PiLineVertical } from "react-icons/pi";
import { CiGrid31 } from "react-icons/ci";
import Logo from "../../public/Logo.svg";
import { shop } from '@/data';
import SubFooter from './subFooter';


const Shop = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full mt-[90px]' >

        {/* Shop 1st section */}

        <div className='bg-[url("/Rectangle1.svg")] bg-cover bg-center flex flex-col items-center justify-center h-[318px]'
        >
        <Image src={Logo}
        alt='logo'
        width={50}
        height={50}
        ></Image>

        <h1 className='font-medium text-5xl'>Shop</h1>

        <div className='flex space-x-2 py-2  '>
            <h1 className='text-base font-medium '>Home</h1>
            <RiArrowRightSLine size={24}/>
            <h1 className='text-base font-light'>Shop</h1>
        </div>
        </div>

        {/* shop 2nd section  */}

        <div className='bg-[#FAF4F4] h-[100px] mt-10 px-10 flex justify-between items-center' >
 
          <div className='flex items-center space-x-3'>
            <LiaSlidersHSolid size={25}/>
            <h4 className='font-normal text-xl'>Filter</h4>
            <BsFillGridFill size={17} />
            <CiGrid31 size={24}/>
            <PiLineVertical color='#EEEEEE' size={37} className='text-[#EEEEEE]'/>
            <p className='font-normal text-base'>Showing 1&#8211;16 of 32 results</p>
            </div>

            <div className='flex items-center space-x-6'>
              <div className='flex items-center gap-4'>
              <h4 className='font-normal text-xl'>Show</h4>
              <input type="text" name="text" placeholder='16' className='flex w-[55px] h-[55px] placeholder:text-[#9F9F9F] placeholder:text-base placeholder:font-normal focus:outline-none text-center justify-center'  />
              </div>
              <div className='flex items-center gap-4'>
              <h4 className='font-normal text-xl'>Sort by</h4>
              <input type="text" name="text" placeholder='Default' className='flex w-[188px] h-[55px] placeholder:text-[#9F9F9F] placeholder:text-base placeholder:font-normal focus:outline-none text-center justify-center'  />
              </div>
            </div>
            
        </div>

        {/* shop 3rd section | products section */}

        <div className='grid grid-cols-2 md:grid-cols-4 py-4 place-items-center px-28 gap-[31px]'>
          {shop.map((items) => (

            <div className='w-72 h-[372px]' key={items.id}>
              <Image src={items.image} alt='products' width={400} height={400} className='w-60 h-72'></Image>
              <div className='w-[194px]'>
              <p className='font-normal text-base mt-[14px] '>{items.title} </p>
              <h3 className='font-medium text-2xl mt-3'>{items.price} </h3>
              </div>
              </div>
          ))}
        </div>

        {/* 4th section | numbering section */}

        <div className='flex items-center justify-center gap-[38px] my-20'>

          <p className='bg-[#FBEBB5] px-8 py-[15px] rounded-[10px]'>1</p>
          <p className='bg-[#FFF9E5] px-8 py-[15px] rounded-[10px]'>2</p>
          <p className='bg-[#FFF9E5] px-8 py-[15px] rounded-[10px]'>3</p>
          <p className='bg-[#FFF9E5] px-8 py-[15px] rounded-[10px]'>Next</p>
          
        </div>

        {/* 5th section | ads section */}
        <SubFooter />

    </div>
  )
}

export default Shop