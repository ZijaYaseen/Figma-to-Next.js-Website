// src/components/HeroSection.tsx
import { IProduct } from "@/data"; // Import your IProduct type
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  product: IProduct;
}

const HeroSection = ({ product }: HeroSectionProps) => {

  return (
    <div className="mt-4 flex flex-col-reverse lg:flex-row justify-between items-center w-full bg-[#FBEBB5] px-3 lg:px-16 py-8">
      {/* Text Content */}
      <div className="lg:ml-[202px] w-full lg:w-[40%] text-center lg:text-left lg:h-[600px] flex flex-col justify-center">
        <h1 className="font-medium text-[32px] sm:text-[48px] lg:text-[64px] lg:leading-tight">
          {product.name}
        </h1>
        <Link href={`/Shop/${product._id}`}>
          <button className="mt-6 sm:mt-[20px] lg:mt-[35px] font-medium text-lg sm:text-xl lg:text-2xl border-b-2 border-[#3f3b2d] leading-10">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Image Content */}
      <div className="w-full lg:w-auto flex justify-center lg:mr-10">
        <Image
          src={product.imagePath}
          alt={product.name}
          width={600}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
