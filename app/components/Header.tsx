
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'


function Header() {
    return (
        <>


            <header className='flex justify-between p-4 bg-transparent' >

                <div className='flex gap-4 '>
                    <Link href={'https://github.com/UsmanFaisal13'}>Github</Link>
                    <Link href={'https://www.linkedin.com/in/usman-faisal-9b9a0b1b4/'}>Linkedin</Link>
                </div>
                <nav className='flex flex-row gap-4 '>


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