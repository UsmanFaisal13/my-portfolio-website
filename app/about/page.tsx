import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex py-20 min-h-screen flex-col items-center gap-8'>
            <h1 className='text-6xl font-Darker_Grotesque mb-4'>About Me</h1>

            <div className='flex flex-col md:flex-row max-w-6xl gap-12 px-6'>
                <div className='flex-1'>
                    <Image
                        src="/languages/nextjs.png"
                        alt="Profile Picture"
                        width={400}
                        height={400}
                        className='rounded-2xl shadow-lg'
                    />
                </div>

                <div className='flex-1 space-y-6'>
                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>Who I Am</h2>
                        <p className='text-lg leading-relaxed'>
                            I'm a passionate web developer with a keen eye for creating elegant solutions. My journey in tech started with a curiosity for how things work on the web, and it has evolved into a professional pursuit of crafting exceptional digital experiences.
                        </p>
                    </div>

                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>My Skills</h2>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                                React.js
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                                Next.js
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                                TypeScript
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                                Tailwind CSS
                            </div>
                        </div>
                    </div>

                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>What I Do</h2>
                        <p className='text-lg leading-relaxed'>
                            I specialize in building modern web applications that combine beautiful design with powerful functionality. My focus is on creating responsive, user-friendly interfaces that deliver exceptional user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default page