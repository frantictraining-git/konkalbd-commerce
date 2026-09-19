'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function LandingFramer() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-red-600 selection:text-white">
      {/* 
        THEME REQUIREMENT: 
        White Background (Base)
        20% Black (Accents/Text/Blocks)
        20% Red (Accents/CTAs/Highlights)
      */}

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-black/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          KONKAL<span className="text-red-600">.</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/category/bestsellers" className="font-bold text-sm hover:text-red-600 transition-colors uppercase tracking-widest">
            Shop All
          </Link>
        </motion.div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between min-h-[90vh]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-8 z-10"
        >
          <motion.div variants={fadeInUp} className="inline-block bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest">
            New Drop
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter"
          >
            THE <br/>
            <span className="text-red-600">MORNING</span> <br/>
            STAR.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl max-w-md font-medium text-black/70">
            Exclusive digitally hand-sculpted statue available only at Konkal. Available in 4", 5", and 6" variants.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/product/1" className="inline-flex items-center justify-center bg-red-600 text-white font-bold px-8 py-4 text-lg hover:bg-black transition-colors group">
              Collect Yours Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative mt-16 md:mt-0 w-full max-w-lg aspect-square"
        >
          {/* Abstract Red/Black Shapes behind the image */}
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-red-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-black rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
          
          <img 
            src="/images/golden-skull.jpg" 
            alt="Morning Star" 
            className="w-full h-full object-cover z-10 relative drop-shadow-2xl rounded-2xl"
          />
          
          {/* Floating black block */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-black text-white p-6 z-20 hidden md:block"
          >
            <p className="font-bold text-sm uppercase tracking-widest text-red-500 mb-1">Variant</p>
            <p className="text-2xl font-black">GOLD SILK PLA</p>
          </motion.div>
        </motion.div>
      </section>

      {/* RED DIVIDER MARQUEE */}
      <div className="bg-red-600 text-white py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 text-2xl font-black uppercase tracking-widest"
        >
          <span>PREMIUM 3D PRINTS</span> • <span>EXCLUSIVE DESIGNS</span> • <span>MADE IN BANGLADESH</span> • 
          <span>PREMIUM 3D PRINTS</span> • <span>EXCLUSIVE DESIGNS</span> • <span>MADE IN BANGLADESH</span> • 
          <span>PREMIUM 3D PRINTS</span> • <span>EXCLUSIVE DESIGNS</span> • <span>MADE IN BANGLADESH</span>
        </motion.div>
      </div>

      {/* SECOND SECTION: BLACK / WHITE SPLIT */}
      <section className="flex flex-col md:flex-row min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 bg-black text-white p-12 md:p-24 flex flex-col justify-center"
        >
          <h2 className="text-5xl font-black mb-6">HULKENSTEIN.</h2>
          <p className="text-lg text-white/70 mb-8 max-w-md">
            Is this a show piece or is this a headphone stand? It's a life-size Hulkenstein head that can be used as either one.
          </p>
          <Link href="/product/1" className="inline-flex items-center text-red-500 font-bold hover:text-white transition-colors">
            View Details <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 bg-gray-100 relative p-12 md:p-24 flex items-center justify-center"
        >
          <img src="/images/hulk-bust.jpg" alt="Hulk Bust" className="w-full max-w-md object-cover shadow-2xl rounded-xl" />
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-black/10 py-12 px-6 text-center">
        <h2 className="text-4xl font-black tracking-tighter mb-4">KONKAL<span className="text-red-600">.</span></h2>
        <p className="text-black/50 font-medium">© 2026 Konkal BD. All rights reserved.</p>
      </footer>
    </div>
  )
}
