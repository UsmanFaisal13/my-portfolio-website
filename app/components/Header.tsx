
import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'




function Header() {
    return (
        <>



            <header className='flex justify-between p-5 bg-transparent' >


                <div className='flex gap-4 '>
                    <Link href={'https://github.com/UsmanFaisal13'} className='hover:text-gray-300 focus:font-bold transition-all'>Github</Link>
                    <Link href={'https://www.linkedin.com/in/usman-faisal-142a85285/'} className='hover:text-gray-300 focus:font-bold transition-all'>Linkedin</Link>
                </div>
                <Navbar />


                <nav className='lg:flex lg:flex-row gap-4 hidden '>


                    <Link href="/" className='hover:text-gray-300 focus:font-bold transition-all'>Home</Link>


                    <Link href='./project-page' className='hover:text-gray-300 focus:font-bold transition-all'>Projects</Link>


                    <Link href="/contacts" className='hover:text-gray-300 focus:font-bold transition-all'>Contact</Link>
                    <Link href="/about" className='hover:text-gray-300 focus:font-bold transition-all'>About</Link>


                </nav>
            </header>
        </>
    )
}

export default Header