import Image from 'next/image'
import Link from 'next/link'
import { Picksproduct, blog } from '@/data/index'
import { FaRegClock } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { IProduct } from '@/data/index';
import { FeaturedSectionData, HeroSectionData, TopPicksData } from '@/sanity/lib/queries';
import FeaturedSection from '@/components/FeaturedSection';
import TopPicks from '@/components/TopPicks';


const Home = async () => {

const HeroSectionProductData: IProduct = await HeroSectionData();
const FeaturedSectionProductData: IProduct[] = await FeaturedSectionData()
const TopPicksProductData : IProduct[] = await TopPicksData()


  return (
    <div className='max-w-[1440vw] font-poppins h-full w-full overflow-hidden'>

      <header>
      <Header bgColor="bg-[#FBEBB5]" shadow='no' />
      </header>

     {/* Home 1 Section Rocket Single Seater sofa*/}
     <HeroSection product={HeroSectionProductData}  />


    {/* Home Page 2nd section  Featured section*/}
    <FeaturedSection products={FeaturedSectionProductData} />


    {/* Home page 3rd section */}
    <TopPicks products={TopPicksProductData}/>


    {/* home page 4th section */}
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[#FFF9E5] pb-5 px-6 sm:px-10">
  {/* Image Section */}
  <div className="w-full lg:w-[60%] flex justify-center">
    <Image src={"/asgaardsofa1.svg"} width={800} height={700} alt="sofa" ></Image>
  </div>

  {/* Text and Button Section */}
  <div className="flex flex-col items-center w-full lg:w-[40%] justify-center text-center">
    <p className="font-medium text-2xl">New Arrivals</p>
    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Asgaard sofa</h2>
    <Link href={"/SingleProduct"}>
    <button className="border mt-[33px] border-black font-normal text-xl w-[50vw] md:w-[40%] lg:w-[18vw] lg:h-[10vh] h-[8vh] shadow-xl">
      Order Now
    </button></Link>
  </div>
</div>


{/* Home page 5th section */}
<section className="flex flex-col items-center justify-center bg-[#FFFFFF] py-10">
  <h1 className="font-medium text-3xl sm:text-4xl">Our Blogs</h1>
  <p className="text-[#9F9F9F] font-medium text-base mt-[13px] text-center sm:text-lg px-2">
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
          alt="blog"
          width={80}
          height={100}
          className="md:w-full w-[90%] h-[50vh] object-cover rounded-lg"
        ></Image>
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

  <Link href={"/Blog"}>
  <button className="font-medium text-xl border-b-2 border-black pb-2">
    View All Post
    </button>
    </Link>
</section>


{/* Home pae 6th section */}

<section className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 py-16 sm:py-32 bg-[url('/bgHome.svg')] bg-cover bg-center">
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

export default Home