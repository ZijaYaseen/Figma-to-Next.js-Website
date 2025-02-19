// src/components/HeroSection.tsx
import { IProduct } from "@/data"; // Import your IProduct type
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  product: IProduct;
}

const HeroSection = ({ product }: HeroSectionProps) => {

  return (
    <div className="mt-14 w-full bg-[#FAF4F4] lg:px-16 pb-8 lg:py-20">
      {/* Text Content */}
      <div className="md:w-[80%] w-full mx-auto flex flex-col-reverse md:flex-row md:justify-between">
      <div className=" text-center lg:text-left  flex flex-col justify-center">
        <h1 className="font-medium text-[32px] sm:text-[48px]  lg:leading-tight mt-4">
          {product.name}
        </h1>
        <Link href={`/Shop${product._id}`}
>
  <button className="mt-4 sm:mt-[20px] lg:mt-[35px] font-medium text-lg sm:text-xl lg:text-2xl border-b-2 border-[#3f3b2d] leading-10">
    Shop Now
  </button>
</Link>
      </div>

      {/* Image Content */}
      <div className="flex justify-center">
      <Image
  src={product.imagePath }
  alt={product.name}
  width={500}
  height={200}
  priority
  
/>

      </div>
      </div>
    </div>
  );
};

export default HeroSection;
