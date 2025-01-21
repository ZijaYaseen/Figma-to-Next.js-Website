import { IProduct } from "@/data";
import Image from "next/image"
import Link from "next/link";

interface FeaturedProps  {
   products : IProduct[] 
}

const FeaturedSection = ({products}:FeaturedProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full bg-[#FAF4F4] mx-auto px-6 lg:px-16 py-10 gap-8">
  {/* 2 items...  */}

{products.map((product) =>(
  
  <div className="relative flex flex-col items-center lg:items-start" key={product._id}>
    <Image
      src={product.imagePath}
      alt={product.name}
      width={650}
      height={500}
      className="w-full max-w-[500px] h-auto"
    ></Image>
    <h2 className="absolute text-center lg:text-left font-medium text-2xl sm:text-3xl lg:text-4xl top-[80%] left-1/2 lg:left-[50px] transform -translate-x-1/2 lg:translate-x-0">
      {product.name}
    </h2>
    <Link
      href={`/Shop`}
      className="absolute text-center lg:text-left top-[95%] left-1/2 lg:left-[50px] transform -translate-x-1/2 lg:translate-x-0"
    >
      <button className="font-medium text-base sm:text-xl lg:text-2xl border-b-2 border-[#3f3b2d] leading-10">
        View More
      </button>
    </Link>
  </div>
  ))}

</div>
  )
}

export default FeaturedSection