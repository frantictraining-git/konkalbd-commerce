import ProductClient from './ProductClient'

export const MOCK_PRODUCT = {
  id: '1',
  name: 'Life-Size Hulkenstein Headphone Stand',
  price: 4500,
  description: 'Is this a show piece or is this a headphone stand? It\'s a life-size Hulkenstein head that can be used as either one! A massive, premium 3D printed statement piece. Available now exclusively on Konkal!',
  images: [
    '/images/hulk-bust.jpg',
    '/images/golden-skull.jpg',
    '/images/cacodemon.jpg',
  ],
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ProductClient id={id} />
}
