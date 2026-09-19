import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'

// For static export, we need to generate static params. 
// In production, we would fetch these from Sanity.
export function generateStaticParams() {
  return [
    { slug: 'bestsellers' },
    { slug: 'home-decor' },
    { slug: 'keychains' },
    { slug: 'figurines' },
    { slug: 'custom' },
    { slug: 'toys' },
  ]
}

const MOCK_PRODUCTS = [
  { id: 1, name: 'Geometric Lion Head', variant: 'Matte Black', price: 1200, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Lion+Head' },
  { id: 2, name: 'Minimalist Vase set', variant: 'Off-White', price: 850, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Vase' },
  { id: 3, name: 'Custom Name Plate', variant: 'Gold Finish', price: 1500, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Name+Plate' },
  { id: 4, name: 'Anime Figurine', variant: 'Hand Painted', price: 2500, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Anime' },
  { id: 5, name: 'Abstract Planter', variant: 'Stone Texture', price: 950, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Planter' },
  { id: 6, name: '3D Printed Lamp', variant: 'Warm Glow', price: 3200, image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Lamp' },
]

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Format slug to title
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-foreground/50 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-foreground font-medium">{title}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-none space-y-6">
          <div className="flex items-center justify-between md:hidden">
            <h2 className="font-bold text-lg">Filters</h2>
            <button className="p-2 border rounded-md"><Filter className="w-4 h-4" /></button>
          </div>
          
          <div className="hidden md:block space-y-6">
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="/category/bestsellers" className={slug === 'bestsellers' ? 'font-bold text-primary' : 'hover:text-primary'}>Bestsellers</Link></li>
                <li><Link href="/category/home-decor" className={slug === 'home-decor' ? 'font-bold text-primary' : 'hover:text-primary'}>Home Decor</Link></li>
                <li><Link href="/category/figurines" className={slug === 'figurines' ? 'font-bold text-primary' : 'hover:text-primary'}>Figurines</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Price Range</h3>
              <div className="flex flex-col gap-2 text-sm text-foreground/70">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" /> Under ৳ 1,000
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" /> ৳ 1,000 - ৳ 2,500
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" /> Over ৳ 2,500
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
            <span className="text-sm text-foreground/50">{MOCK_PRODUCTS.length} products</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {MOCK_PRODUCTS.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col gap-3">
                <div className="aspect-[4/5] bg-accent/20 rounded-lg overflow-hidden relative border border-accent/40">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-foreground/50">{product.variant}</p>
                  <p className="mt-1 font-bold">৳ {product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
