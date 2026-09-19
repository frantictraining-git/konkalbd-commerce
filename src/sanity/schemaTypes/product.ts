export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'basePrice',
      title: 'Base Price (Tk)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'variants',
      title: 'Variants (Color/Size/Finish)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Variant Name (e.g. Navy Blue, Large)', type: 'string' },
            { name: 'priceAdjustment', title: 'Price Adjustment (Tk)', type: 'number', initialValue: 0 },
            { name: 'inStock', title: 'In Stock', type: 'boolean', initialValue: true },
          ],
        },
      ],
    },
    {
      name: 'isPopular',
      title: 'Popular Design (Show on Home)',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
