import React from 'react';
import Image from 'next/image';
import { RiArrowRightSLine } from "react-icons/ri";
import { blogposts, shortBlogs } from '@/data';
import { CiSearch} from 'react-icons/ci';
import { FaUser } from "react-icons/fa";
import { BsBox2Fill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import Link from 'next/link';
import Numbering from './Numbering';

const Blog = () => {
  return (
    <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

        {/* blog 1st section */}

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

  <h1 className='font-medium text-3xl sm:text-4xl lg:text-5xl'>Blog</h1>

  <div className='flex space-x-2 py-2 text-sm sm:text-base'>
    <Link href={"/"}>
    <h1 className='font-medium'>Home</h1>
    </Link>
    <RiArrowRightSLine
      size={20}
      className='sm:size-[24] lg:size-[24]'
    />
    <h1 className='font-light'>Blog</h1>
  </div>
</div>

{/* 2nd section */}

<div className='flex flex-col md:flex-row md:pt-[106px] my-5 md:px-24 px-5 justify-between'>

  <div className='grid grid-cols-1 md:w-[65%] w-full gap-8'>
    {blogposts.map((items) => (
      <div className='flex flex-col' key={items.title}>
        <Image
          src={items.image}
          width={150}
          height={150}
          alt='Blogs'
          className='w-full h-full'
        />

        <div className='flex flex-wrap space-x-4 text-[#9F9F9F] my-2'>
          <div className='flex gap-2'>
            <FaUser size={20} />
            <p>Admin</p>
          </div>

          <div className='flex gap-2'>
            <BsBox2Fill size={20} />
            <p>14 Oct 2022</p>
          </div>

          <div className='flex gap-2'>
            <FaTag size={24} />
            <p>Wood</p>
          </div>
        </div>

        <h1 className='font-medium text-2xl md:text-3xl my-5'>{items.title}</h1>
        <p className='text-[#9F9F9F] font-normal text-sm md:text-base'>{items.description}</p>

        <Link href={"/"}>
          <button className="font-medium text-lg md:text-xl border-b-2 border-black pb-2 mt-4">
            Read More
          </button>
        </Link>
      </div>
    ))}
  </div>

  <div className='flex flex-col items-center mt-8 md:mt-0 md:ml-8'>
    {/* Search Bar */}
    <div className='flex w-full md:w-[311px] h-[58px] border border-[#9F9F9F] items-center rounded-[10px] mb-6'>
      <input
        type="search"
        name="search"
        className='w-full items-center h-[80%] px-3 focus:outline-none'
      />
      <CiSearch size={28} className='mr-2' />
    </div>

    {/* Categories */}
    <div className='w-full md:w-[251px] text-left items-start flex flex-col'>
      <h1 className='my-6 md:my-11 font-medium text-xl md:text-2xl'>Categories</h1>

      <div className='flex flex-col gap-6 md:gap-10 font-normal text-sm md:text-base text-[#9F9F9F] w-full'>
        <div className='flex justify-between'>
          <p>Crafts</p>
          <p>2</p>
        </div>

        <div className='flex justify-between'>
          <p>Crafts</p>
          <p>2</p>
        </div>

        <div className='flex justify-between'>
          <p>Design</p>
          <p>8</p>
        </div>

        <div className='flex justify-between'>
          <p>Handmade</p>
          <p>7</p>
        </div>

        <div className='flex justify-between'>
          <p>Interior</p>
          <p>1</p>
        </div>

        <div className='flex justify-between'>
          <p>Wood</p>
          <p>6</p>
        </div>
      </div>

      {/* Short Blogs */}
    <div className='flex flex-col items-center gap-6 md:gap-10 mt-8 md:mt-20'>
      <h1 className='font-medium text-xl md:text-2xl'>Recent Posts</h1>
      {shortBlogs.map((items) => (
        <div className='flex gap-4' key={items.title}>
          <Image src={items.image} alt='blog' width={80} height={80} />

          <div className='flex flex-col justify-center'>
            <h3 className='text-sm md:text-base font-normal'>{items.title}</h3>
            <p className='text-[#9F9F9F] font-normal text-xs md:text-sm mt-2'>{items.date}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>

</div>



<Numbering />
</div>
  )
}

export default Blog