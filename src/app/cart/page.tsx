'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/cartStore'
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-foreground/50 mb-6 text-lg">Your cart is currently empty.</p>
          <Link href="/category/bestsellers" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition-colors inline-block">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 md:gap-6 border-b border-accent/20 pb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-md overflow-hidden flex-none">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
                      <p className="font-bold whitespace-nowrap ml-4">৳ {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-foreground/50 mt-1">{item.variantName} • {item.sizeName}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-accent/40 rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-accent/10"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-accent/10"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors flex items-center text-sm gap-1"
                    >
                      <Trash2 className="w-4 h-4" /> <span className="hidden md:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20 sticky top-24">
              <h2 className="text-lg font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6 border-b border-accent/40 pb-6">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Subtotal</span>
                  <span className="font-medium">৳ {getTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Delivery</span>
                  <span className="text-foreground/50">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold mb-8">
                <span>Total</span>
                <span>৳ {getTotal().toLocaleString()}</span>
              </div>

              <Link 
                href="/checkout"
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
