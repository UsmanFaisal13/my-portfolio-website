"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-1 bg-black/30 backdrop-blur-sm z-30" />
            )}

            <div className={`mx-4  flex flex-col gap-2 lg:hidden justify-center items-end ${isOpen ? `z-50` : `z-40`}`} onClick={() => setIsOpen(!isOpen)}>
                <div className={`h-[1px] w-6 bg-white rounded-3xl ${isOpen ? `rotate-45 translate-y-2` : `block`} transition-all`}></div>
                <div className={`h-[1px] w-6 bg-white rounded-3xl ${isOpen ? `-rotate-45 translate-y-2 relative bottom-[9.5px]` : `block`} transition-all`}></div>

            </div >
            <nav className={`bg-black w-[90vw] h-full flex items-center justify-center lg:hidden absolute z-30 rounded-xl ${isOpen ? `bottom-0 ` : `bottom-full`} transition-all`}>
                <div className={`flex flex-col gap-16 items-center justify-center py-16`}>
                    <Link href="/" className=' transition-all focus:text-2xl'>Home</Link>
                    <Link href='./project-page' className='hover:font-black transition-all focus:text-2xl'>Projects</Link>
                    <Link href="/contacts" className='hover:font-black transition-all focus:text-2xl'>Contact</Link>
                    <Link href="/about" className='hover:font-black transition-all focus:text-2xl'>About</Link>

                </div>
            </nav>
        </>
    );
}
