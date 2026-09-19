import ProductClient from './ProductClient'

export const MOCK_PRODUCT = {
  id: '1',
  name: 'Golden Skull King Bust',
  price: 3500,
  description: 'An intricately detailed Golden Skull King bust, 3D printed in premium gold silk PLA. Perfect for dark fantasy collectors, tabletop gamers, or as a striking desk centerpiece. Features sharp halo spikes and ornate armor detailing.',
  images: [
    '/images/golden-skull.jpg',
    '/images/hulk-bust.jpg',
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
