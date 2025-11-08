"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {

    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-16 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg flex items-center px-5 transition-all duration-300">
            <Link href="/" className='pr-10 transition-transform duration-300 hover:scale-105'>
                <Image src="/images/lolgo.jpg" width={60} height={60} alt="Logo" className="rounded-full shadow-md" />
            </Link>
            {!isOpen && (
                <div className="hidden md:flex items-center">
                    <Link href="/" className={`text-white flex px-4 items-center h-16 hover:text-yellow-400 transition-colors duration-300 hover:bg-gray-800/50 ${path === '/' ? 'font-bold underline bg-gray-800 text-yellow-400' : ''}`}>Home</Link>
                    <Link href="/about" className={`text-white flex px-4 items-center h-16 hover:text-yellow-400 transition-colors duration-300 hover:bg-gray-800/50 ${path === '/about' ? 'font-bold underline bg-gray-800 text-yellow-400' : ''}`}>About</Link>
                    <Link href="/contact" className={`text-white flex px-4 items-center h-16 hover:text-yellow-400 transition-colors duration-300 hover:bg-gray-800/50 ${path === '/contact' ? 'font-bold underline bg-gray-800 text-yellow-400' : ''}`}>Contact</Link>
                </div>
            )}
            <button type='button' onClick={() => setIsOpen(!isOpen)} className='absolute right-4 flex md:hidden flex-col justify-center items-center h-16 w-16 bg-black/50 backdrop-blur-sm rounded-md shadow-md focus:outline-none transition-all duration-300 hover:bg-black/70'>
                <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-8 h-0.5 bg-white my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            <div className={`absolute top-0 right-0 h-full w-[30%] bg-gradient-to-l from-black via-gray-900 to-black flex flex-col items-center md:hidden shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button type='button' onClick={() => setIsOpen(!isOpen)} className='w-[30%] h-8 mt-4 mb-4 ml-20 flex flex-col justify-center items-center focus:outline-none bg-transparent'>
                    <span className='w-8 h-0.5 bg-white rotate-45 transition-all duration-300'></span>
                    <span className='w-8 h-0.5 bg-white -rotate-45 -translate-y-0.5 transition-all duration-300'></span>
                </button>
                <Link href="/" className={`text-white w-full text-center px-4 py-3 hover:bg-gray-800/70 hover:text-yellow-400 transition-all duration-300 mx-2 ${path === '/' ? 'font-bold underline bg-gray-800 text-yellow-400' : ''}`}>Home</Link>
                <Link href="/about" className={`text-white w-full text-center px-4 py-3 hover:bg-gray-800/70 hover:text-yellow-400 transition-all duration-300 mx-2 ${path === '/about' ? 'font-bold underline bg-gray-800 text-yellow-400' : ''}`}>About</Link>
                <Link href="/contact" className={`text-white w-full text-center px-4 py-3 hover:bg-gray-800/70 hover:text-yellow-400 transition-all duration-300 mx-2 ${path === '/contact' ? 'font-bold underline bg-gray-800 text-yellow-400' : ''}`}>Contact</Link>
            </div>
        </nav>
    );
}
