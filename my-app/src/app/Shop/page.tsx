import Image from 'next/image';
import { LiaSlidersHSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { PiLineVertical } from "react-icons/pi";
import { CiGrid31 } from "react-icons/ci";
import { shop } from '@/data';
import Numbering from '@/components/Numbering';
import PagesHeader from '@/components/PagesHeader';


const Shop = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

        {/* Shop 1st section Header*/}

        <div>
             <PagesHeader title='Shop' name='Shop' />
        </div>


        {/* shop 2nd section  */}

        <div className='bg-[#FAF4F4] md:h-[100px] mt-10 px-10 py-3 md:py-0  flex flex-col md:flex-row justify-between items-center gap-4' >
 
          <div className='flex items-center space-x-3'>
            <LiaSlidersHSolid size={25}/>
            <h4 className='font-normal text-xl'>Filter</h4>
            <BsFillGridFill size={17} />
            <CiGrid31 size={24}/>
            <PiLineVertical color='black' size={50} className='text-[#000000]'/>
            <p className='font-normal md:text-base text-xs'>Showing 1&#8211;16 of 32 results</p>
            </div>

            <div className='flex items-center space-x-6  '>
              <div className='flex items-center md:gap-4 gap-2'>
              <h4 className='font-normal md:text-xl text-sm'>Show</h4>
              <input type="text" name="text" placeholder='16' className='flex w-[55px] h-[40px] md:h-[55px] placeholder:text-[#9F9F9F] placeholder:text-base placeholder:font-normal focus:outline-none text-center justify-center'  />
              </div>
              <div className='flex items-center md:gap-4 gap-2'>
              <h4 className='font-normal md:text-xl text-sm'>Sort by</h4>
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

        <Numbering />

    </div>
  )
}

export default Shop