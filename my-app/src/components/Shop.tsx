import Image from 'next/image'
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { PiLineVertical } from "react-icons/pi";
import { CiGrid31 } from "react-icons/ci";
import { shop } from '@/data';


const Shop = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

        {/* Shop 1st section */}

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

  <h1 className='font-medium text-3xl sm:text-4xl lg:text-5xl'>Shop</h1>

  <div className='flex space-x-2 py-2 text-sm sm:text-base'>
    <h1 className='font-medium'>Home</h1>
    <RiArrowRightSLine
      size={20}
      className='sm:size-[24] lg:size-[24]'
    />
    <h1 className='font-light'>Shop</h1>
  </div>
</div>



        {/* shop 2nd section  */}

        <div className='bg-[#FAF4F4] h-[100px] mt-10 px-10 py-3 md:py-0  flex flex-col md:flex-row justify-between items-center ' >
 
          <div className='flex items-center space-x-3'>
            <LiaSlidersHSolid size={25}/>
            <h4 className='font-normal text-xl'>Filter</h4>
            <BsFillGridFill size={17} />
            <CiGrid31 size={24}/>
            <PiLineVertical color='#EEEEEE' size={37} className='text-[#EEEEEE]'/>
            <p className='font-normal md:text-base text-xs'>Showing 1&#8211;16 of 32 results</p>
            </div>

            <div className='flex items-center space-x-6  '>
              <div className='flex items-center md:gap-4 gap-2'>
              <h4 className='font-normal md:text-xl text-xs'>Show</h4>
              <input type="text" name="text" placeholder='16' className='flex w-[55px] h-[40px] md:h-[55px] placeholder:text-[#9F9F9F] placeholder:text-base placeholder:font-normal focus:outline-none text-center justify-center'  />
              </div>
              <div className='flex items-center md:gap-4 gap-2'>
              <h4 className='font-normal md:text-xl text-xs'>Sort by</h4>
              <input type="text" name="text" placeholder='Default' className='flex md:w-[188px] w-[100px] h-[40px] md:h-[55px] placeholder:text-[#9F9F9F] placeholder:text-base placeholder:font-normal focus:outline-none text-center justify-center'  />
              </div>
            </div>
            
        </div>

        {/* shop 3rd section | products section */}

        <div className='grid grid-cols-2 md:grid-cols-4 py-4 place-items-center px-6 md:px-16 lg:px-28 gap-[31px]'>
  {shop.map((items) => (
    <div className='w-36 md:w-72 h-auto md:h-[372px]' key={items.id}>
      <Image
        src={items.image}
        alt='products'
        width={400}
        height={400}
        className='w-40 h-40 md:w-60 md:h-72'
      />
      <div className='w-[130px] md:w-[194px]'>
        <p className='font-normal text-sm md:text-base mt-2 md:mt-[14px]'>{items.title}</p>
        <h3 className='font-medium text-lg md:text-2xl mt-2 md:mt-3'>{items.price}</h3>
      </div>
    </div>
  ))}
</div>


        {/* 4th section | numbering section */}

        <div className='flex items-center justify-center gap-[38px] my-20 px-5'>

          <p className='hover:bg-[#FBEBB5] bg-[#FFF9E5] md:px-8 px-4 md:py-[15px] py-2 rounded-[10px]'>1</p>
          <p className='hover:bg-[#FBEBB5] bg-[#FFF9E5] md:px-8 px-4 md:py-[15px] py-2 rounded-[10px]'>2</p>
          <p className='hover:bg-[#FBEBB5] bg-[#FFF9E5] md:px-8 px-4 md:py-[15px] py-2 rounded-[10px]'>3</p>
          <p className='hover:bg-[#FBEBB5] bg-[#FFF9E5] md:px-8 px-4 md:py-[15px] py-2 rounded-[10px]'>Next</p>
          
        </div>

    </div>
  )
}

export default Shop