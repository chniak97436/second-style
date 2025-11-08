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

                </div>

            )}
            <button type='button' onClick={() => setIsOpen(!isOpen)} className='absolute right-4 flex md:hidden flex-col justify-center items-center h-16 w-16 bg-black focus'>
                <span className='w-8 h-0.5 bg-white '></span>
                <span className='w-8 h-0.5 bg-white my-1'></span>
                <span className='w-8 h-0.5 bg-white '></span>
            </button>
            {isOpen && (
                <div className="absolute top-0 right-0 h-full w-[30%] bg-black flex flex-col items-center md:hidden">
                    <button type='button' onClick={() => setIsOpen(false)} className='w-[30%] h-8 mt-4 mb-4 ml-20 flex flex-col justify-center items-center focus bg-black'>
                        <span className='w-8 h-0.5 bg-white rotate-45 '></span>
                        <span className='w-8 h-0.5 bg-white -rotate-45 -translate-y-0.5'></span>
                    </button>
                    <Link href="/" className={`text-white w-full text-center px-4 py-2 hover:bg-gray-800 ${path === '/' ? 'font-bold underline bg-gray-800' : ''}`}>Home</Link>
                    <Link href="/about" className={`text-white w-full text-center px-4 py-2 hover:bg-gray-800 ${path === '/about' ? 'font-bold underline bg-gray-800' : ''}`}>About</Link>
                    <Link href="/contact" className={`text-white w-full text-center px-4 py-2 hover:bg-gray-800 ${path === '/contact' ? 'font-bold underline bg-gray-800' : ''}`}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
