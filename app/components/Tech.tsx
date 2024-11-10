import React from 'react'
import Image from 'next/image'

function Tech() {
    return (
        <div className='flex py-20 h-screen flex-col gap-4 px-32'>
            <h1 className='text-2xl '>Familiar Technologies</h1>
            <div className='flex flex-row gap-4 flex-wrap w-full'>
                <Image src={'/languages/html.png'} alt='html' width={80} height={80}></Image>
                <Image src={'/languages/css.png'} alt='html' width={80} height={80}></Image>
                <Image src={'/languages/javascript.png'} alt='html' width={80} height={80}></Image>
                <Image src={'/languages/wordpress.png'} alt='html' width={80} height={80}></Image>
                <Image src={'/languages/firebase.png'} alt='html' width={80} height={80}></Image>

            </div>
        </div>
    )
}

export default Tech