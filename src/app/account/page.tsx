'use client'

import { useState, useEffect } from 'react'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { Package, Truck, CheckCircle2 } from 'lucide-react'

// Mock order history for demonstration since we aren't hooking up Firestore yet
const MOCK_ORDERS = [
  {
    id: 'KBD-92831',
    date: '2026-09-15',
    status: 'Shipped',
    total: 2700,
    items: [
      { name: 'Geometric Lion Head', variant: 'Matte Black', qty: 1, price: 1200 },
      { name: 'Custom Name Plate', variant: 'Gold Finish', qty: 1, price: 1500 }
    ]
  },
  {
    id: 'KBD-81723',
    date: '2026-08-01',
    status: 'Delivered',
    total: 850,
    items: [
      { name: 'Minimalist Vase set', variant: 'Off-White', qty: 1, price: 850 }
    ]
  }
]

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-md">
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4">{error}</div>}
          
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-md hover:bg-primary/90 transition-colors">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
            <button onClick={() => setIsLogin(!isLogin)} className="ml-2 font-bold text-primary hover:underline">
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-none space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="font-bold text-lg mb-1">My Account</h2>
            <p className="text-sm text-gray-500 mb-6 truncate">{user.email}</p>
            
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-2 bg-primary/10 text-primary font-medium rounded-md">Order History</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Account Settings</a>
            </nav>

            <button 
              onClick={() => signOut(auth)}
              className="mt-8 text-sm text-red-600 font-medium hover:underline px-4"
            >
              Log out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Order History</h1>

          <div className="space-y-6">
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200 flex flex-wrap justify-between items-center gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Order Placed</p>
                    <p className="font-medium">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total</p>
                    <p className="font-medium">৳ {order.total.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Order ID</p>
                    <p className="font-medium">{order.id}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    {order.status === 'Delivered' ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : order.status === 'Shipped' ? (
                      <Truck className="w-6 h-6 text-blue-500" />
                    ) : (
                      <Package className="w-6 h-6 text-yellow-500" />
                    )}
                    <h3 className="font-bold text-lg">{order.status}</h3>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-500">{item.variant} • Qty: {item.qty}</p>
                        </div>
                        <p className="font-medium">৳ {item.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                    <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
                      Track Order
                    </button>
                    <button className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                      View Invoice
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
