"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {

    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-16 bg-black shadow-md flex items-center  px-5">
            <Link href="/" className='pr-10'>
                <Image src="/images/lolgo.jpg" width={60} height={60} alt="Logo" />
            </Link>
            {!isOpen && (
                <div className="hidden md:flex justify-center items-center space-x-6">
                    <Link href="/" className={`text-white flex mx-auto px-4 items-center hover:text-gray-300 h-16  ${path === '/' ? 'font-bold underline bg-gray-800' : ''}`}>Home</Link>
                    <Link href="/about" className={`text-white flex mx-auto px-4 items-center h-16 hover:text-gray-300 ${path === '/about' ? 'font-bold underline  bg-gray-800' : ''}`}>About</Link>
                    <Link href="/contact" className={`text-white flex mx-auto px-4 items-center h-16 hover:text-gray-300 ${path === '/contact' ? 'font-bold underline  bg-gray-800' : ''}`}>Contact</Link>
                    <button type='button' className='absolute right-5 md:hidden flex-col justify-center items-center focus h-16 w-16 bg-black'>
                        <span className='w-8 h-0.5 bg-white '></span>
                        <span className='w-8 h-0.5 bg-white my-1'></span>
                        <span className='w-8 h-0.5 bg-white '></span>
                    </button>
                </div>
            )}
        </nav>
    );
}
