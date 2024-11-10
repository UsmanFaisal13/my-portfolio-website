
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'


function Header() {
    return (
        <>


            <header className='flex justify-between p-4 bg-transparent' >

                <div className='flex gap-4 '>
                    <button>github</button>
                    <button>linkedin</button>
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