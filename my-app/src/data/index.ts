export const Nav = [
    {name:"Home", Link:"/"},
    {name:"Shop", Link:"/Shop"},
    {name:"About", Link:"/About"},
    {name:"Contact", Link:"/Contact"},
]

export const NavMbl = [
    {name:"Home", Link:"/"},
    {name:"Shop", Link:"/Shop"},
    {name:"About", Link:"/About"},
    {name:"Contact", Link:"/Contact"},
]

export const Help = [
    {name:"Payment Options", Link:"/"},
    {name:"Returns", Link:"/"},
    {name:"Privacy Policies", Link:"/"},

];

export interface IProduct {
    _id: string;
    name: string;
    imagePath: string;
    description: string;
    size:string[],
    color:string[],
    price: number;
    category?: string;
    stockLevel: number;
    isFeaturedProduct?: boolean;
    discountPercentage: number;
    tags?: string[];
    
  }

export const blog = [
    {
        image:"blog1.svg",
        title:"Going all-in with millennial design",
    },
    {
        image:"blog2.svg",
        title:"Going all-in with millennial design",
    },
    {
        image:"blog3.svg",
        title:"Going all-in with millennial design",
    },
];

export const shop = [
    {
        id:"Trenton-modular-sofa_3",
        image: "/shop1.svg",
        title :"Trenton modular sofa_3",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:"Granite-dining-table-with-dining-chair",
        image: "/shop2.svg",
        title :"Granite dining table with dining chair",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:"Outdoor-bar-table-and-stool",
        image: "/shop3.svg",
        title :"Outdoor bar table and stool",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:"Plain-console-with-teak-mirror",
        image: "/shop4.svg",
        title :"Plain console with teak mirror",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:5,
        image: "/shop5.svg",
        title :"Grain coffee table",
        price :"Rs. 15,000.00",
        link :"/"
    },
    {
        id:6,
        image: "/shop6.svg",
        title :"Kent coffee table",
        price :"Rs. 225,000.00",
        link :"/"
    },
    {
        id:7,
        image: "/shop7.svg",
        title :"Round coffee table_color 2",
        price :"Rs. 251,000.00",
        link :"/"
    },
    {
        id:8,
        image: "/shop8.svg",
        title :"Reclaimed teak coffee table",
        price :"Rs. 25,200.00",
        link :"/"
    },
    {
        id:9,
        image: "/shop9.svg",
        title :"Plain console_",
        price :"Rs. 258,200.00",
        link :"/"
    },
    {
        id:10,
        image: "/shop10.svg",
        title :"Reclaimed teak Sideboard",
        price :"Rs. 20,000.00",
        link :"/"
    },
    {
        id:11,
        image: "/shop11.svg",
        title :"SJP_0825 ",
        price :"Rs. 200,000.00",
        link :"/"
    },
    {
        id:12,
        image: "/shop12.svg",
        title :"Bella chair and table",
        price :"Rs. 100,000.00",
        link :"/"
    },
    {
        id:13,
        image: "/shop13.svg",
        title :"Granite square side table",
        price :"Rs. 258,800.00",
        link :"/"
    },
    {
        id:14,
        image: "/shop14.svg",
        title :"Asgaard sofa",
        price :"Rs. 250,000.00",
        link :"/Single-Product"
    },
    {
        id:15,
        image: "/shop15.svg",
        title :"Maya sofa three seater",
        price :"Rs. 115,000.00",
        link :"/"
    },
    {
        id:16,
        image: "/shop16.svg",
        title :"Outdoor sofa set",
        price :"Rs. 244,000.00",
        link :"/"
    },

];

export const blogposts = [
    {
        image:"/blogPost1.svg",
        title :"Going all-in with millennial design",
        description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        Link :"/"
    },
    {
        image:"/blogPost2.svg",
        title :"Exploring new ways of decorating",
        description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        Link :"/"
    },
    {
        image:"/blogPost3.svg",
        title :"Handmade pieces that took time to make",
        description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        Link :"/"
    },

];

export const shortBlogs = [
    {
        image :"/shortBlog1.svg",
        title :"Going all-in with millennial design",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog2.svg",
        title :"Exploring new ways of decorating",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog3.svg",
        title :"Handmade pieces that took time to make",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog4.svg",
        title :"Modern home in Milan",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog5.svg",
        title :"Colorful office redesign",
        date:"03 Aug 2022",
    },
]