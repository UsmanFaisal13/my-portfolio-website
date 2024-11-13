import React from 'react'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div className='flex py-20 min-h-screen flex-col items-center gap-4'>
            <h1 className='text-6xl font-Darker_Grotesque mb-8'>Contact me
            </h1>

            <form className='flex flex-col w-full max-w-md gap-4 p-6 bg-white/5 rounded-lg backdrop-blur-sm'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='name' className='text-lg font-Darker_Grotesque'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='p-2 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className='text-lg font-Darker_Grotesque'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='p-2 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='message' className='text-lg font-Darker_Grotesque'>Message</label>
                    <textarea
                        id='message'
                        name='message'
                        rows={4}
                        className='p-2 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>

                <button
                    type='submit'
                    className='mt-4 py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-Darker_Grotesque text-lg transition-colors'
                >
                    Send Message
                </button>
            </form>


        </div>
    )
}

export default page
