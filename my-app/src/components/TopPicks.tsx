import { IProduct } from "@/data";
import Image from "next/image"
import Link from "next/link";

interface TopPicksProps {
    products : IProduct[] 
}

const TopPicks = ({products}:TopPicksProps) => {
  return (
    <div className="flex flex-col justify-between items-center bg-[#FFFFFF] px-6 sm:px-10 py-10">
  <h1 className="font-medium text-2xl sm:text-3xl">Top Picks For You</h1>
  <p className="text-[#9F9F9F] font-medium text-sm sm:text-base text-center max-w-[600px] mt-4">
    Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
  </p>

  {/* Products */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:mt-8 w-full max-w-[1200px]">
    {products.map((product) => (
        <Link href={`Shop/${product._id}`} key={product.name}>
      <div className="flex flex-col items-center">
        {/* Image */}
        <Image
          src={product.imagePath}
          alt="Products"
          width={200}
          height={200}
          className="md:w-[250px] md:h-[250px] w-full object-cover"
        ></Image>
        {/* Title */}
        <p className="py-4 text-base sm:text-lg font-normal text-center">
          {product.name}
        </p>
        {/* Price */}
        <h3 className="text-xl sm:text-2xl font-medium">{product.price}</h3>
      </div>
      </Link>
    ))}
  </div>

  <Link href={"/Shop"}>
  <button className="font-medium text-xl border-b-2 border-black pb-2 mt-16">
    View More
    </button>
    </Link>
</div>
  )
}

export default TopPicks