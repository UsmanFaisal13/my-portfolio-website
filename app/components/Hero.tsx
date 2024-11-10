import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Hero() {
    return (
        <div className='flex py-20 h-screen flex-col items-center gap-4'>
            <h1 className='text-9xl font-Darker_Grotesque'>Usman Faisal</h1>
            <p className='text-2xl font-Darker_Grotesque '>Apprentice full stack developer based in Karachi, Pakistan.</p>
            <div className='flex gap-20 flex-row justify-around'>
                <Link href={'/contacts'}>

                    <button className='bg-black p-4 py-2 my-6 text-white rounded-lg hover:bg-[#101010] transition-colors'>Contact</button>
                </Link>
                <div className='py-4'>
                    <h1 className='font-DM_Sans text-sm'>Specialized in</h1>
                    <div className='flex gap-2 pt-2'>
                        <Image src={'/languages/typescript.png'} alt='html' width={24} height={24}></Image>
                        <Image src={'/languages/tailwind.png'} alt='html' width={24} height={24}></Image>
                        <Image src={'/languages/nextjs.png'} alt='html' width={24} height={24}></Image>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero