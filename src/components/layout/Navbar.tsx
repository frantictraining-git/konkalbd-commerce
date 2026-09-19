'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, Search, User } from 'lucide-react'
import { useCartStore } from '@/lib/cartStore'
import { useEffect, useState } from 'react'

export function Navbar() {
  const items = useCartStore((state) => state.items)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/90 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 -ml-2" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/" className="font-bold text-xl tracking-tight text-primary">
            KONKAL
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/category/bestsellers" className="hover:text-primary transition-colors">Bestsellers</Link>
          <Link href="/category/home-decor" className="hover:text-primary transition-colors">Home Decor</Link>
          <Link href="/category/figurines" className="hover:text-primary transition-colors">Figurines</Link>
          <Link href="/category/custom-orders" className="hover:text-primary transition-colors">Custom Orders</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hidden sm:block hover:text-primary" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/account" className="p-2 hover:text-primary" aria-label="Account">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="p-2 hover:text-primary relative" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            {mounted && itemCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
