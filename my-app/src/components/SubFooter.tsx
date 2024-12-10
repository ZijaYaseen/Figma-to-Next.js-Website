import React from 'react'

const SubFooter = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-between justify-center py-5 bg-[#FAF4F4] md:h-[300px] md:px-28 px-10 gap-20'>

          <div className='flex flex-col'>
            <h2 className='font-medium text-[32px]'>Free Delivery</h2>
            <p className='text-[#9F9F9F] font-normal text-xl'>For all oders over $50, consectetur adipim scing elit.</p>
          </div>

          <div>
            <h2 className='font-medium text-[32px]'>90 Days Return</h2>
            <p className='text-[#9F9F9F] font-normal text-xl'>If goods have problems, consectetur adipim scing elit.</p>
          </div>

          <div>
            <h2 className='font-medium text-[32px]'>Secure Payment</h2>
            <p className='text-[#9F9F9F] font-normal text-xl'>100% secure payment, consectetur adipim scing elit.</p>
          </div>

        </div>
  )
}

export default SubFooter