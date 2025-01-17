// qroq queries

import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetBlogsData() {
    return sanityClient.fetch(
        groq`*[_type == "blogs"]{
    id,
    title,
    description[]{
      ...,
      _type == "image" => {
        "imageUrl": asset->url,
        alt
      }
    },
    "thumbnailUrl": thumbnail.asset->url
  }
    `
    )
}