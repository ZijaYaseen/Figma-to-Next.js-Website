import { client } from "./client";

// for shop page data
export async function GetProductsData(searchQuery: string = '') {
  const query = `
    *[_type == 'product' && 
      (name match $searchQuery || category match $searchQuery)
    ] {
      _id,
      name,
      imagePath,
      description,
      price,
      category,
      stockLevel,
      isFeaturedProduct
    }
  `;
  return await client.fetch(query, { searchQuery: `*${searchQuery}*` });
}


// Hero section product data
export async function HeroSectionData() {

  const query = `*[_type == "product" && "HeroSection" in tags[]] {
    _id,
    name,
    imagePath,
  }[0]`;
  return await client.fetch(query);
};

// featured section product data
export async function FeaturedSectionData() {

  const query = `
  *[_type == "product" && "Featured Section" in tags[]] {
    _id,
    name,
    imagePath,
  }
  `;
  return await client.fetch(query);
};

// Top Picks product data
export async function TopPicksData() {

  const query = `
  *[_type == "product" && "Top Picks" in tags[]] {
    _id,
    name,
    imagePath,
  }
  `;
  return await client.fetch(query);
};

