import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
function Header() {
    return (
        <>
            <Image
                src={'Ellipse 6.svg'}
                alt={'Ellipse 6'}
                width={0}
                height={0}
                className={`w-full absolute z-0 flex self-center rounded-b-full- ${styles.fadeIn}`}
            />
            <header className='flex justify-between p-4' >

                <div className='flex gap-4'>
                    <button>github</button>
                    <button>linkedin</button>
                </div>
                <nav className='flex flex-row'>
                    <ul className='flex flex-row gap-4 '>
                        <li>
                            <Link href={'/'}>Home</Link >

                        </li>
                        <li>
                            <Link href={'projects'}>Projects</Link >
                        </li>
                        <li>
                            <Link href={'contact'}>Contact</Link >
                        </li>
                    </ul>

                </nav>
            </header>
        </>
    )
}


export default Header