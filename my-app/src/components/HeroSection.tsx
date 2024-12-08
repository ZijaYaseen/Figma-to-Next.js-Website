import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Picksproduct, blog } from '@/data/data'
import { FaRegClock } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className='max-w-[1440vw] font-poppins h-full w-full'>

     {/* Home 1 Section */}
<div className="mt-10 flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full bg-[#FBEBB5] mx-auto px-6 lg:px-16 py-10">
  {/* Text Content */}
  <div className="lg:ml-[202px] w-full lg:w-[40%] text-center lg:text-left">
    <h1 className="font-medium text-[32px] sm:text-[48px] lg:text-[64px] leading-tight">
      Rocket Single Seater
    </h1>
    <Link href={"/"}>
      <button className="mt-6 sm:mt-[20px] lg:mt-[35px] font-medium text-lg sm:text-xl lg:text-2xl border-b-2 border-[#3f3b2d] leading-10">
        Shop Now
      </button>
    </Link>
  </div>

  {/* Image Content */}
  <div className="w-full lg:w-auto flex justify-center lg:mr-10">
    <Image
      src={"/Rocket single seater 1.svg"}
      alt="Home Pic"
      width={650}
      height={300}
      className="max-w-full h-auto"
    />
  </div>
</div>


    {/* Home Page 2nd section */}
    <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full bg-[#FAF4F4] mx-auto px-6 lg:px-16 py-10 gap-8">
  {/* First Item */}
  <div className="relative flex flex-col items-center lg:items-start">
    <Image
      src={"/Granite square side table 1.svg"}
      alt="Side Table"
      width={650}
      height={500}
      className="w-full max-w-[500px] h-auto"
    />
    <h2 className="absolute text-center lg:text-left font-medium text-2xl sm:text-3xl lg:text-4xl top-[80%] left-1/2 lg:left-[50px] transform -translate-x-1/2 lg:translate-x-0">
      Side Table
    </h2>
    <Link
      href={"/"}
      className="absolute text-center lg:text-left top-[90%] left-1/2 lg:left-[50px] transform -translate-x-1/2 lg:translate-x-0"
    >
      <button className="font-medium text-base sm:text-xl lg:text-2xl border-b-2 border-[#3f3b2d] leading-10">
        View More
      </button>
    </Link>
  </div>

  {/* Second Item */}
  <div className="relative flex flex-col items-center lg:items-start">
    <Image
      src={"/Cloud sofa three seater + ottoman_3 1.svg"}
      alt="Cloud Sofa"
      width={650}
      height={500}
      className="w-full max-w-[500px] h-auto"
    />
    <h2 className="absolute text-center lg:text-left font-medium text-2xl sm:text-3xl lg:text-4xl top-[80%] left-1/2 lg:left-[50px] transform -translate-x-1/2 lg:translate-x-0">
      Cloud Sofa
    </h2>
    <Link
      href={"/"}
      className="absolute text-center lg:text-left top-[90%] left-1/2 lg:left-[50px] transform -translate-x-1/2 lg:translate-x-0"
    >
      <button className="font-medium text-base sm:text-xl lg:text-2xl border-b-2 border-[#3f3b2d] leading-10">
        View More
      </button>
    </Link>
  </div>
</div>


    {/* Home page 3rd section */}

    <div className="flex flex-col justify-between items-center bg-[#FFFFFF] px-6 sm:px-10 py-10">
  <h1 className="font-medium text-2xl sm:text-3xl">Top Picks For You</h1>
  <p className="text-[#9F9F9F] font-medium text-sm sm:text-base text-center max-w-[600px] mt-4">
    Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
  </p>

  {/* Products */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:mt-8 w-full max-w-[1200px]">
    {Picksproduct.map((items) => (
      <div key={items.title} className="flex flex-col items-center">
        {/* Image */}
        <Image
          src={items.Image}
          alt=""
          width={200}
          height={200}
          className="md:w-[250px] md:h-[250px] w-full object-cover"
        />
        {/* Title */}
        <p className="py-4 text-base sm:text-lg font-normal text-center">
          {items.title}
        </p>
        {/* Price */}
        <h3 className="text-xl sm:text-2xl font-medium">{items.price}</h3>
      </div>
    ))}
  </div>
</div>


    {/* home page 4th section */}
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[#FFF9E5] pb-5 px-6 sm:px-10">
  {/* Image Section */}
  <div className="w-full lg:w-[60%] flex justify-center">
    <Image src={"/Asgaard sofa 1.svg"} width={800} height={700} alt="sofa" />
  </div>

  {/* Text and Button Section */}
  <div className="flex flex-col items-center w-full lg:w-[40%] justify-center text-center">
    <p className="font-medium text-2xl">New Arrivals</p>
    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Asgaard sofa</h2>
    <button className="border mt-[33px] border-black font-normal text-xl w-[80%] sm:w-[60%] md:w-[40%] lg:w-[18vw] h-[10vh] shadow-xl">
      Order Now
    </button>
  </div>
</div>


{/* Home page 5th section */}
<section className="flex flex-col items-center justify-center bg-[#FFFFFF] py-10">
  <h1 className="font-medium text-3xl sm:text-4xl">Our Blogs</h1>
  <p className="text-[#9F9F9F] font-medium text-base mt-[13px] text-center sm:text-lg">
    Find a bright ideal to suit your taste with our great selection
  </p>

  <div className="flex flex-wrap justify-center items-center w-full gap-10 mt-8">
    {blog.map((items, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center mb-8 w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
      >
        <Image
          src={items.image}
          alt=""
          width={80}
          height={100}
          className="md:w-full w-[90%] h-[50vh] object-cover rounded-lg"
        />
        <p className="py-4 text-xl font-normal text-center">{items.title}</p>
        <button className="text-base font-bold border-b-2 border-black">Read More</button>

        <div className="flex items-center space-x-4 mt-6">
          <div className="flex items-center space-x-2">
            <FaRegClock size={18} className="font-bold" />
            <span>5 min</span>
          </div>

          <div className="flex items-center space-x-2">
            <CiCalendar size={24} className="font-bold" />
            <span>
              12<sup>th</sup> Oct 2022
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  <button className="font-medium text-xl border-b-2 border-black pb-2">View All Post</button>
</section>


{/* Home pae 6th section */}

<section className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 py-16 sm:py-32 bg-[url('/Rectangle17.svg')] bg-cover bg-center">
  <h1 className="font-bold text-4xl sm:text-6xl text-center">Our Instagram</h1>
  <p className="font-normal text-lg sm:text-xl text-center">Follow our store on Instagram</p>
  <Link
    href={"/"}
    className="font-normal text-lg sm:text-xl bg-[#FAF4F4] rounded-3xl shadow-2xl w-[60%] sm:w-[15vw] h-[10vh] flex items-center justify-center"
  >
    <button className="text-lg sm:text-xl">
      Follow Us
    </button>
  </Link>
</section>
   


    </div>
  )
}

export default HeroSection