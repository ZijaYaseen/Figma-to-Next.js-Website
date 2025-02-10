import { IProduct } from "@/data";
import Image from "next/image"
import Link from "next/link";

interface FeaturedProps  {
   products : IProduct[] 
}

const FeaturedSection = ({products}:FeaturedProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-[#FAF4F4] px-6 lg:px-16 py-10 gap-10">
  {/* 2 items...  */}

{products.map((product) =>(
  
  <div className="flex flex-col items-center" key={product._id}>
   <Link href={`Shop/${product._id}`}>
   <Image
      src={product.imagePath}
      alt={product.name}
      width={450}
      height={300}
      priority
       className="object-cover w-[450px] h-[300px]"
    ></Image>
   </Link>
    <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl mb-3 ">
      {product.name}
    </h2>
    <Link
      href={`/Shop`}
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