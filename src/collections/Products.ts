import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  timestamps: true,
  fields: [
    {
      name: 'sku',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Káva', value: 'kava' },
        { label: 'Keramika', value: 'keramika' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'artist',
      type: 'relationship',
      relationTo: 'artists',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'imageUrl',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'altImageUrl',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'altText',
      type: 'text',
    },
    {
      name: 'seoText',
      type: 'textarea',
    },
    {
      name: 'altImageSeo',
      type: 'text',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      min: 0,
      admin: { step: 0.01 },
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'CZK',
    },
    {
      name: 'isAvailable',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'stock',
      type: 'number',
      min: 0,
      defaultValue: 0,
    },
    {
      name: 'maxOrder',
      type: 'number',
      min: 0,
      defaultValue: 0, // 0 = unlimited
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'alt', type: 'text' },
        { name: 'seo', type: 'text' },
        { name: 'position', type: 'number', defaultValue: 0, min: 0 },
      ],
    },
  ],
}
