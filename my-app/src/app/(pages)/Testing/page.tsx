// app/page.tsx
"use client";

import React from 'react';
import SearchBar from '@/components/SearchBar';
import ProductsList from '@/components/ProductsList';

const HomePage: React.FC = () => {
  return (
    <div className="p-8 mt-14">
      <h1 className="text-3xl font-bold mb-4">Welcome to Product Search</h1>
      <SearchBar />
      <ProductsList />
    </div>
  );
};

export default HomePage;
