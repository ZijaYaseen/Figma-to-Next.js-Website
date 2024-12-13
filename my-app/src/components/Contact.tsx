import React from 'react';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

        {/* Contact 1st section */}

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

  <h1 className='font-medium text-3xl sm:text-4xl lg:text-5xl'>Contact</h1>

  <div className='flex space-x-2 py-2 text-sm sm:text-base'>
    <Link href={"/"}>
    <h1 className='font-medium'>Home</h1>
    </Link>
    <RiArrowRightSLine
      size={20}
      className='sm:size-[24] lg:size-[24]'
    />
    <h1 className='font-light'>Contact</h1>
  </div>
</div>

{/* 2nd section heading */}

<div className='flex flex-col justify-center items-center md:py-20 py-10 text-center px-5 '>
    <h1 className='font-semibold text-4xl'>Get In Touch With Us</h1>
    <p className='text-base font-normal text-[#9F9F9F] md:w-[45%] w-full'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
</div>

<div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between w-full md:px-60 px-5 md:pb-20 pb-10 '>

<div className="flex flex-col gap-10 max-w-xs w-full">
  {/* Address Section */}
  <div className="grid">
    <div className='flex'>
    <FaLocationDot size={28} />
      <h1 className="font-medium text-2xl ml-7">Address</h1>
    </div>
    <p className="font-normal text-base ml-12">236 5th SE Avenue, New York NY10000, United States</p>
  </div>

  {/* Phone Section */}
  <div className="grid">
    <div className='flex'>
    <FaPhoneAlt size={30} />
      <h1 className="font-medium text-2xl ml-7">Phone</h1>
    </div>
    <p className="font-normal text-base ml-12">
        Mobile: +(84) 546-6789 <br />
        Hotline: +(84) 456-6789
      </p>
  </div>

  {/* Working Time Section */}
  <div className="grid">
    <div className='flex'>
    <FaClock size={23} />
      <h1 className="font-medium text-2xl ml-7">Working Time</h1>
     
    </div>
    <p className="font-normal text-base ml-12">
        Monday-Friday: 9:00 - 22:00 <br />
        Saturday-Sunday: 9:00 - 21:00
      </p>
  </div>
</div>

{/* form */}
      <form
        action="post"
        className="w-full max-w-md mt-10 md:mt-0"
      >
        
        {/* Name Field */}
        <div className="mb-6">
          <label
            className="block text-base font-medium mb-4"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        {/* Email Address Field */}
        <div className="mb-6">
          <label
            className="block text-base font-medium mb-4"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-6">
          <label
            className="block text-base font-medium mb-4"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="This is optional"
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            className="block text-base font-medium mb-4"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hi! I'd like to ask about..."
            rows={4}
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center">
          <button
            type="submit"
            className="font-normal text-base py-2 border border-black px-12 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
</div>

</div>
  )
}

export default Contact