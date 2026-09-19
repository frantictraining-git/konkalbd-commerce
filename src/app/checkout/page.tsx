'use client'

import { useState, useEffect } from 'react'
import { useCartStore } from '@/lib/cartStore'
import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'

// Bangladesh Divisions & sample Districts
const DIVISIONS = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh']
const DELIVERY_FEE = {
  INSIDE_DHAKA: 70,
  OUTSIDE_DHAKA: 130
}

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  
  const [division, setDivision] = useState('Dhaka')
  const [paymentMethod, setPaymentMethod] = useState('bKash')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  
  const deliveryFee = division === 'Dhaka' ? DELIVERY_FEE.INSIDE_DHAKA : DELIVERY_FEE.OUTSIDE_DHAKA
  const finalTotal = getTotal() + deliveryFee

  useEffect(() => {
    setMounted(true)
    if (items.length === 0 && !orderComplete) {
      router.push('/cart')
    }
  }, [items, router, orderComplete])

  if (!mounted) return null

  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Order Received!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We have received your order and payment details. 
          You will receive a confirmation call shortly.
        </p>
        <button 
          onClick={() => router.push('/')}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // In a real app, we would send this data to Sanity/Firebase here
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderComplete(true)
      clearCart()
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Shipping Details */}
          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold mb-6">Delivery Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary" placeholder="Enter your full name" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary" placeholder="01XXX-XXXXXX" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Division</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                >
                  {DIVISIONS.map(div => <option key={div} value={div}>{div}</option>)}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary" placeholder="e.g. Gazipur" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Address (House, Road, Area)</label>
                <textarea required rows={3} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary" placeholder="Detailed address for the delivery man..."></textarea>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
            <div className="space-y-4">
              <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'bKash' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" value="bKash" checked={paymentMethod === 'bKash'} onChange={() => setPaymentMethod('bKash')} className="text-primary focus:ring-primary" />
                  <span className="font-medium">bKash (Send Money)</span>
                </div>
                {paymentMethod === 'bKash' && (
                  <div className="mt-4 pl-7 text-sm text-gray-600 space-y-3">
                    <p>1. Send Money to <strong>01711-XXXXXX</strong> (Personal)</p>
                    <p>2. Enter your TrxID below to confirm your order.</p>
                    <input required type="text" placeholder="bKash TrxID (e.g. 9F6A2B...)" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2" />
                  </div>
                )}
              </label>

              <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'Nagad' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" value="Nagad" checked={paymentMethod === 'Nagad'} onChange={() => setPaymentMethod('Nagad')} className="text-primary focus:ring-primary" />
                  <span className="font-medium">Nagad (Send Money)</span>
                </div>
                {paymentMethod === 'Nagad' && (
                  <div className="mt-4 pl-7 text-sm text-gray-600 space-y-3">
                    <p>1. Send Money to <strong>01711-XXXXXX</strong> (Personal)</p>
                    <p>2. Enter your TrxID below.</p>
                    <input required type="text" placeholder="Nagad TrxID" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2" />
                  </div>
                )}
              </label>

              <label className={`block border rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'COD' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" value="COD" checked={paymentMethod === 'COD'} onChange={() => setPaymentMethod('COD')} className="text-primary focus:ring-primary" />
                  <span className="font-medium">Cash on Delivery (Advance Delivery Fee Required)</span>
                </div>
                {paymentMethod === 'COD' && (
                  <div className="mt-4 pl-7 text-sm text-gray-600">
                    <p>To confirm COD, please send the delivery fee (৳ {deliveryFee}) to our bKash number and enter the TrxID.</p>
                    <input required type="text" placeholder="TrxID for Delivery Fee" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-3" />
                  </div>
                )}
              </label>
            </div>
          </section>
        </div>

        {/* Order Summary sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 sticky top-24">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 text-sm">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden border border-gray-200 flex-none relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">{item.quantity}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium line-clamp-1">{item.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.variantName}</p>
                  </div>
                  <div className="font-medium text-right">
                    ৳ {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm mb-6 border-t border-gray-200 pt-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">৳ {getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee ({division})</span>
                <span className="font-medium">৳ {deliveryFee}</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold mb-8 border-t border-gray-200 pt-6">
              <span>Total</span>
              <span className="text-primary">৳ {finalTotal.toLocaleString()}</span>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
