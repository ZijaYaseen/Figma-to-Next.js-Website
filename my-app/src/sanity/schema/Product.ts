
export const ProductsSchema = {
    name: "products", // using for groq query
    title: "Products", // show on sanity UI
    type: "document", // default
    fields: [
        {
            name: "slug",
            title: "Product Slug",
            type: "slug", // Product slug
            option: {
                source : "name"
            }
        },
        {
            name: "title",
            title: "Title Name",
            type: "string", // Product ka title
        },
        {
            name: "description",
            title: "Product Description",
            type: "text", // For multiple lines of description
        },
        {
            name: "image",
            title: "Product Image",
            type: "array",
            of: [{type:"image"}]
        },
       
        {
            name: "stock",
            title: "Stock",
            type: "number", // Blog thumbnail ke liye
        },
    ],
};
