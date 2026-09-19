'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, RefreshCcw, Star, Package, ThumbsUp } from 'lucide-react'

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function LandingFramer() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-red-600 selection:text-white">
      
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-bold tracking-widest uppercase">
        Free Delivery Nationwide on Orders Over ৳ 5000
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            KONKAL<span className="text-red-600">.</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
            <Link href="#" className="hover:text-red-600 transition-colors">Shop</Link>
            <Link href="#" className="hover:text-red-600 transition-colors">Collections</Link>
            <Link href="#" className="hover:text-red-600 transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-red-600 font-bold uppercase tracking-widest text-sm">
              Premium 3D Prints
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight">
              BRING IDEAS TO LIFE.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-black/70 max-w-md">
              Exclusive, highly detailed 3D printed sculptures and collectibles, crafted right here in Bangladesh.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <Link href="/product/1" className="bg-red-600 text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-colors flex items-center">
                Shop The Drop <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/category/bestsellers" className="bg-white text-black border-2 border-black font-bold px-8 py-4 rounded-full hover:bg-black hover:text-white transition-colors">
                View All
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-[32px] overflow-hidden shadow-2xl"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
              <img src="/images/hulk-bust.jpg" alt="Hulk Bust" className="w-full h-full object-cover rounded-2xl shadow-xl" />
            </div>
            <div className="p-6 text-white flex justify-between items-center">
              <div>
                <p className="font-bold text-xl">Hulkenstein Headphone Stand</p>
                <p className="text-white/60 text-sm mt-1">Matte Gray Finish</p>
              </div>
              <p className="text-red-500 font-bold text-xl">৳ 4,500</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONFIDENCE STRIP */}
      <section className="border-y border-black/10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          <div className="py-8 px-6 flex flex-col items-center text-center gap-3">
            <Truck className="w-8 h-8 text-red-600" />
            <span className="font-bold">Nationwide Delivery<br/>Inside & Outside Dhaka</span>
          </div>
          <div className="py-8 px-6 flex flex-col items-center text-center gap-3">
            <ShieldCheck className="w-8 h-8 text-red-600" />
            <span className="font-bold">Premium Materials<br/>Durable & High Detail</span>
          </div>
          <div className="py-8 px-6 flex flex-col items-center text-center gap-3">
            <RefreshCcw className="w-8 h-8 text-red-600" />
            <span className="font-bold">Satisfaction Guarantee<br/>Easy Return Policy</span>
          </div>
        </div>
      </section>

      {/* HOME PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">NEW ARRIVALS</h2>
            <p className="mt-4 text-black/60">Our latest exclusive sculpts.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 1, name: 'Morning Star Statue', price: 3500, img: '/images/golden-skull.jpg' },
              { id: 2, name: 'The Incredible Hulk Bust', price: 4500, img: '/images/hulk-bust.jpg' },
              { id: 3, name: 'Cacodemon Monster Head', price: 1800, img: '/images/cacodemon.jpg' },
              { id: 4, name: 'Upcoming Collectible (WIP)', price: 0, img: '/images/hulk-render.jpg' },
            ].map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] bg-white rounded-[24px] overflow-hidden mb-4 shadow-sm border border-black/5">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                <p className="text-black/60 font-medium mt-1">{item.price > 0 ? `৳ ${item.price}` : 'Coming Soon'}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/category/all" className="inline-block bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-red-600 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* HOME PROOF */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">Community</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">WHAT COLLECTORS SAY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <motion.figure 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[24px]"
              >
                <div className="flex gap-1 text-red-500 mb-6">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <blockquote className="text-xl font-medium leading-relaxed">
                  "Absolutely insane detail. The print quality on the Morning Star is unmatched in BD."
                </blockquote>
                <figcaption className="mt-6 text-white/50 text-sm font-bold uppercase tracking-widest">
                  - Verified Buyer
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* HOME PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">HOW IT WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <Package className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. You Order</h3>
              <p className="text-black/60 max-w-xs mx-auto">Select your exclusive collectible and checkout securely.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mb-6">
                <RefreshCcw className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. We Print</h3>
              <p className="text-black/60 max-w-xs mx-auto">Our state-of-the-art lab brings your digital sculpt into reality.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <ThumbsUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. You Collect</h3>
              <p className="text-black/60 max-w-xs mx-auto">Delivered straight to your door, ready for display.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tight">
              KONKAL<span className="text-red-600">.</span>
            </Link>
            <p className="text-white/60 mt-4 max-w-xs">Premium 3D prints and exclusive designs made in Bangladesh.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-red-500">Shop</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">New Drops</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Bestsellers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-red-500">Support</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-red-500">Connect</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="https://facebook.com/konkalbd" target="_blank" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-white/40 text-sm flex justify-between items-center">
          <p>© 2026 Konkal BD. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
