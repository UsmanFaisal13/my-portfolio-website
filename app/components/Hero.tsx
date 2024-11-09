import React from 'react'


function Hero() {
    return (
        <div className='flex py-20 h-screen flex-col items-center gap-4'>
            <h1 className='text-9xl font-Darker_Grotesque'>Usman Faisal</h1>
            <p className='text-2xl font-Darker_Grotesque '>Apprentice full stack developer based in Karachi, Pakistan.</p>
            <div className='flex gap-20 flex-row justify-around'>
                <button className='bg-black p-4 py-2 my-6 text-white rounded-lg'>Contact</button>
                <div>
                    <h1 className='py-5 font-DM_Sans text-sm'>Specialized in</h1>
                </div>
            </div>

        </div>
    )
}

export default Hero