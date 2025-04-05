import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Hero() {
    return (
        <div className='flex py-20 flex-col items-center gap-4'>
            <h1 className='lg:text-9xl text-6xl font-Darker_Grotesque'>Usman Faisal</h1>
            <p className='lg:text-2xl text-lg font-Darker_Grotesque px-6 lg:px-0'>JAMstack developer based in Karachi, Pakistan.</p>
            <div className='flex gap-20 flex-row justify-around'>
                <Link href={'/contacts'}>

                    <button className='bg-black border-zinc-800 border-[0.5px] p-4 py-2 my-6 text-white rounded-lg hover:bg-[#101010] transition-colors'>Contact</button>
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