import Link from 'next/link'
import { ArrowRight, CheckCircle2, Truck, CreditCard } from 'lucide-react'

const CATEGORIES = [
  { name: 'Bestsellers', slug: 'bestsellers' },
  { name: 'Home Decor', slug: 'home-decor' },
  { name: 'Keychains', slug: 'keychains' },
  { name: 'Figurines', slug: 'figurines' },
  { name: 'Custom Orders', slug: 'custom' },
  { name: 'Toys', slug: 'toys' },
]

const MOCK_POPULAR = [
  { id: 1, name: 'Geometric Lion Head', variant: 'Matte Black', price: 1200, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Lion+Head' },
  { id: 2, name: 'Minimalist Vase set', variant: 'Off-White', price: 850, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Vase' },
  { id: 3, name: 'Custom Name Plate', variant: 'Gold Finish', price: 1500, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Name+Plate' },
  { id: 4, name: 'Anime Figurine', variant: 'Hand Painted', price: 2500, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Anime' },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* HERO SECTION */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Bring Your Ideas to Life in 3D.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
              Premium 3D-printed home decor, figurines, and personalized gifts made right here in Bangladesh.
            </p>
            <Link 
              href="/category/bestsellers"
              className="inline-flex items-center justify-center bg-background text-foreground font-bold px-8 py-4 rounded-md hover:bg-background/90 transition-colors border border-accent/40"
            >
              Shop the Collection <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[500px] bg-background/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Mock Hero Product Image */}
            <img src="https://placehold.co/800x800/1e3a8a/ffffff?text=Hero+Product" alt="Hero 3D Product" className="object-cover w-full h-full opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur text-foreground p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">Featured: Artisan Dragon</h3>
              <p className="text-sm">Silk Gold Finish • ৳ 3,200</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY RAIL */}
      <section className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/category/${cat.slug}`}
              className="flex-none bg-accent/20 hover:bg-gray-200 text-foreground font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap border border-accent/40"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR DESIGNS GRID */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Popular Designs</h2>
          <Link href="/shop" className="text-primary font-medium hover:underline flex items-center">
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {MOCK_POPULAR.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col gap-3">
              <div className="aspect-[4/5] bg-accent/20 rounded-lg overflow-hidden relative border border-accent/40">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-foreground/50">{product.variant}</p>
                <p className="mt-1 font-bold">৳ {product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="bg-accent/10 py-16 border-y border-accent/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[2px] bg-gray-200" />
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-gray-50">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Choose & Pay</h3>
              <p className="text-foreground/70">Select your design and pay securely via bKash or Nagad.</p>
            </div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-gray-50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. We Print & Check</h3>
              <p className="text-foreground/70">Your order is 3D printed and passes our strict quality check.</p>
            </div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-gray-50">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Delivered by Pathao</h3>
              <p className="text-foreground/70">Fast, tracked delivery right to your doorstep across BD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER QUOTE CAROUSEL (Mock) */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-xl">
          <div className="text-accent mb-6 flex justify-center text-2xl">
            ★★★★★
          </div>
          <blockquote className="text-xl md:text-3xl font-medium leading-relaxed mb-8">
            "The finish on the custom nameplate was incredibly smooth. Customer service was highly responsive via WhatsApp throughout the whole printing process."
          </blockquote>
          <p className="font-bold">— Nafisa, Dhaka</p>
        </div>
      </section>
    </div>
  )
}
