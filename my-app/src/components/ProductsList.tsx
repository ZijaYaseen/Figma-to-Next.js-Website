"use client"

import React, { useEffect, useState } from 'react';
import { UseAppSelector, UseAppDispatch } from '@/redux/hooks';
import { fetchAllProducts, selectPaginatedProducts } from '@/redux/Search/searchActions';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '@/data';

const ProductsList: React.FC = () => {
  const paginatedProducts: IProduct[] = UseAppSelector(selectPaginatedProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = UseAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null); // Reset any previous error
        if (paginatedProducts.length === 0) {
          await dispatch(fetchAllProducts());
        }
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch, paginatedProducts.length]);

  if (loading) {
    return (
      <div>
        <h1 className="flex justify-center items-center h-[300px] mt-14 font-bold text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[300px] mt-14 font-bold text-2xl text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-4 place-items-center px-6 md:px-16 lg:px-28 gap-[31px]">
      {paginatedProducts.map((product) => (
        <Link href={`Shop/${product._id}`} key={product._id}>
          <div className="w-36 md:w-72 h-auto md:h-[422px] hover:shadow-md flex flex-col justify-center mx-auto">
            <Image
              src={product.imagePath}
              alt={product.name}
              width={600}
              height={600}
              priority={false} // Default lazy loading
              className="w-52 h-32 md:w-60 md:h-72 flex flex-col justify-center mx-auto"
            />
            <div className="w-[130px] md:w-[194px] flex-col justify-center mx-auto">
              <p className="font-semibold text-sm md:text-base mt-2 md:mt-[14px] flex-col justify-center mx-auto">
                {product.name}
              </p>
              <h3 className="font-medium text-base md:text-xl mt-2 md:mt-3 flex-col justify-center mx-auto">
                Price: <span className="font-medium text-lg md:text-2xl">${product.price}</span>
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
