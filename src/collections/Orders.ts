import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderId',
  },
  fields: [
    {
      name: 'orderId',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'stripePaymentIntentId',
      type: 'text',
      required: true,
    },
    {
      name: 'customerEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'customerName',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'productId',
          type: 'text',
          required: true,
        },
        {
          name: 'productName',
          type: 'text',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          defaultValue: 1,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'totalAmount',
      type: 'number',
      required: true,
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'usd',
    },
    {
      name: 'paymentType',
      type: 'select',
      options: [
        {
          label: 'One-time Payment',
          value: 'one-time',
        },
        {
          label: 'Subscription',
          value: 'subscription',
        },
      ],
      defaultValue: 'one-time',
      required: true,
    },
    {
      name: 'vatIncluded',
      type: 'checkbox',
      defaultValue: false,
      label: 'VAT included in price',
    },
    {
      name: 'vatAmount',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'VAT amount (0 for no VAT)',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'paymentStatus',
      type: 'text',
    },
    {
      name: 'metadata',
      type: 'json',
    },
  ],
}
