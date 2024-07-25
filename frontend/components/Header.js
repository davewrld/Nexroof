import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Header() {
    return (
        <header className='bg-white shadow-md p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/" className='="logo'>
                    <Image src='/logo.png' alt="Nexroof" width={150} height={50} />
                </Link>
                <nav className ="hidden md:block">
                    <ul className='flex space-x-4'>
                        <li><Link href="/products" className="hover:text-blue-600">Stone-Coat Roof</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className='hidden md:flex space-x-2'>
                    <button className="bg-gray-200 px-4 py-2 rounded">Cart</button>
                    <button className="bg-gray-200 px-4 py-2 rounded">Account</button>
                </div>
                <MobileMenu />
            </div>
        </header>

    )
}