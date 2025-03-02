import React from 'react'
import Image from 'next/image'

function Tech() {
    return (
        <div className='flex py-20 flex-col gap-4 lg:px-32'>
            <h1 className='lg:text-2xl text-xl '>Familiar Technologies</h1>
            <div className='flex flex-row gap-4 flex-wrap w-full'>
                <Image src={'/languages/html.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/css.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/javascript.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/typescript.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>


                <Image src={'/languages/wordpress.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/firebase.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/react.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/nextjs.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/tailwind.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>
                <Image src={'/languages/Sanity.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 rounded-full '></Image>
                <Image src={'/languages/Python.png'} alt='html' width={80} height={80} className='lg:w-[80px] lg:h-[80px] w-10 h-10 '></Image>



            </div>
        </div>
    )
}

export default Tech