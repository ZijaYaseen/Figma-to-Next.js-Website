export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imagePath',
      title: 'Image Path',
      type: 'url',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'Add tags like HeroSection, Top Picks, Featured Section, etc.',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'color',
      title: 'Colors',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
};
