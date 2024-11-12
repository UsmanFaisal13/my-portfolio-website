
import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'




function Header() {
    return (
        <>



            <header className='flex justify-between p-5 bg-transparent' >


                <div className='flex gap-4 '>
                    <Link href={'https://github.com/UsmanFaisal13'}>Github</Link>
                    <Link href={'https://www.linkedin.com/in/usman-faisal-9b9a0b1b4/'}>Linkedin</Link>
                </div>
                <Navbar />


                <nav className='lg:flex lg:flex-row gap-4 hidden '>


                    <Link href="/">Home</Link>


                    <Link href='./project-page'>Projects</Link>


                    <Link href="/contacts">Contact</Link>
                    <Link href="/about">About</Link>


                </nav>
            </header>
        </>
    )
}

export default Header