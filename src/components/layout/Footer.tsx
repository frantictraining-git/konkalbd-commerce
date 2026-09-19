import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">KONKAL BD</h3>
            <p className="text-sm text-primary-foreground/80">
              Premium 3D printed figurines, home decor, and gifts. Made in Bangladesh.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/category/bestsellers" className="hover:text-white transition-colors">Bestsellers</Link></li>
              <li><Link href="/category/home-decor" className="hover:text-white transition-colors">Home Decor</Link></li>
              <li><Link href="/category/custom-orders" className="hover:text-white transition-colors">Custom Orders</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Trust Signals</h4>
            <p className="text-sm text-primary-foreground/80 mb-2">
              ✓ Fast Nationwide Delivery
            </p>
            <p className="text-sm text-primary-foreground/80 mb-2">
              ✓ Secure bKash / Nagad Payments
            </p>
            <p className="text-sm text-primary-foreground/80">
              ✓ Quality Checked before Dispatch
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Konkal BD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
