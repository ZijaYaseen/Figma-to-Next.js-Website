import { client } from "./client";

export async function GetProductsData() {
  const query = `
  *[_type == 'product'] {
    _id,
    name,
    imagePath,
    description,
    price,
    category,
    stockLevel,
    isFeaturedProduct
  }`;
  return await client.fetch(query);
}