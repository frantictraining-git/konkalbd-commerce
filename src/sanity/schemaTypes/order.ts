export const order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Delivery Address (Division, District, Upazila, Detail)',
      type: 'text',
    },
    {
      name: 'totalAmount',
      title: 'Total Amount (Tk)',
      type: 'number',
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: ['Manual bKash', 'Manual Nagad', 'Cash on Delivery'],
      },
    },
    {
      name: 'transactionId',
      title: 'Transaction ID (if manual payment)',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Pending', 'Processing', 'Printed & Checked', 'Shipped', 'Delivered', 'Cancelled'],
      },
      initialValue: 'Pending',
    },
    {
      name: 'items',
      title: 'Ordered Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productTitle', type: 'string' },
            { name: 'variantName', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
          ],
        },
      ],
    },
  ],
}
