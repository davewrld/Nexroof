"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white shadow-md">
          <ul className="flex flex-col p-4">
            <li><Link href="/products" className="block py-2">Stone-Coat Roof</Link></li>
            <li><Link href="/accessories" className="block py-2">Accessories</Link></li>
            <li><Link href="/contact" className="block py-2">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </div>
  )
}