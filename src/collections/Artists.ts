import type { CollectionConfig } from 'payload'

export const Artists: CollectionConfig = {
  slug: 'artists',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
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
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'website',
      type: 'text',
      required: false,
    },
    {
      name: 'genres',
      type: 'text',
      required: false,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'spotify',
          type: 'text',
          required: false,
        },
        {
          name: 'soundcloud',
          type: 'text',
          required: false,
        },
        {
          name: 'bandcamp',
          type: 'text',
          required: false,
        },
        {
          name: 'instagram',
          type: 'text',
          required: false,
        },
        {
          name: 'twitter',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      admin: {
        readOnly: true,
        description: 'Products created by this artist (auto-populated)',
      },
    },
  ],
}
