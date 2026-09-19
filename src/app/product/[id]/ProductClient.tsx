'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Heart } from 'lucide-react'
import { useCartStore } from '@/lib/cartStore'
import { useRouter } from 'next/navigation'



const MOCK_PRODUCT = {
  id: '1',
  name: 'Geometric Lion Head',
  price: 1200,
  description: 'A striking geometric lion head, 3D printed with premium PLA. Perfect for modern living rooms, offices, and studios. Lightweight and easy to mount.',
  images: [
    'https://placehold.co/800x1000/1e3a8a/ffffff?text=Lion+Head+1',
    'https://placehold.co/800x1000/1e3a8a/ffffff?text=Lion+Head+2',
    'https://placehold.co/800x1000/1e3a8a/ffffff?text=Lion+Head+3',
  ],
  variants: [
    { id: 'v1', name: 'Matte Black (Standard)', priceAdjustment: 0 },
    { id: 'v2', name: 'Silk Gold Finish', priceAdjustment: 300 },
    { id: 'v3', name: 'Marble Texture', priceAdjustment: 500 },
  ],
  sizes: [
    { id: 's1', name: 'Small (15cm)', priceAdjustment: 0 },
    { id: 's2', name: 'Medium (25cm)', priceAdjustment: 800 },
    { id: 's3', name: 'Large (35cm)', priceAdjustment: 1500 },
  ]
}

export default function ProductClient({ id }: { id: string }) {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(MOCK_PRODUCT.variants[0])
  const [selectedSize, setSelectedSize] = useState(MOCK_PRODUCT.sizes[0])
  const [isZoomed, setIsZoomed] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const router = useRouter()

  const finalPrice = MOCK_PRODUCT.price + selectedVariant.priceAdjustment + selectedSize.priceAdjustment

  const handleAddToCart = () => {
    addItem({
      id: `${MOCK_PRODUCT.id}-${selectedVariant.id}-${selectedSize.id}`,
      productId: MOCK_PRODUCT.id,
      name: MOCK_PRODUCT.name,
      price: finalPrice,
      variantName: selectedVariant.name,
      sizeName: selectedSize.name,
      image: MOCK_PRODUCT.images[0],
      quantity: 1
    })
    // Optional: show a toast, for now just route to cart or open drawer. 
    // We will route to cart for simplicity.
    router.push('/cart')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/category/home-decor" className="hover:text-primary">Home Decor</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{MOCK_PRODUCT.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-none hide-scrollbar">
            {MOCK_PRODUCT.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`aspect-[4/5] md:aspect-square w-20 md:w-full rounded-md overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div 
            className="flex-1 bg-gray-100 rounded-xl overflow-hidden relative cursor-zoom-in group"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img 
              src={MOCK_PRODUCT.images[activeImage]} 
              alt={MOCK_PRODUCT.name} 
              className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'group-hover:scale-105'}`}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{MOCK_PRODUCT.name}</h1>
          <p className="text-2xl font-bold text-primary mb-6">৳ {finalPrice.toLocaleString()}</p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {MOCK_PRODUCT.description}
          </p>

          <div className="space-y-6 mb-8">
            {/* Variants */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Finish</span>
                <span className="text-sm text-gray-500">{selectedVariant.name}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {MOCK_PRODUCT.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 border rounded-md text-sm transition-colors ${
                      selectedVariant.id === variant.id 
                        ? 'border-primary bg-primary/5 font-semibold text-primary' 
                        : 'border-gray-200 hover:border-primary/50 text-gray-600'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Size</span>
                <span className="text-sm text-gray-500">{selectedSize.name}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {MOCK_PRODUCT.sizes.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm transition-colors ${
                      selectedSize.id === size.id 
                        ? 'border-primary bg-primary/5 font-semibold text-primary' 
                        : 'border-gray-200 hover:border-primary/50 text-gray-600'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button onClick={handleAddToCart} className="flex-1 bg-primary text-primary-foreground font-bold py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Add to Cart
            </button>
            <button className="w-14 h-14 border border-gray-200 rounded-md flex items-center justify-center hover:text-red-500 hover:border-red-200 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Trust Signals */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Truck className="w-5 h-5 text-green-600" />
              <span>Estimated Delivery: <strong>3-5 Days</strong> (Inside Dhaka), <strong>5-7 Days</strong> (Outside)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Quality Guaranteed. Made with biodegradable PLA.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
