import { createClient, type ClientConfig } from "next-sanity";

const sanityClient :ClientConfig ={

    projectId:"9s61l08g",
    dataset:"production",
    apiVersion:"2025-01-03",
    useCdn: true,
}

export default createClient(sanityClient);

