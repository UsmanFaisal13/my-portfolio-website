import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex py-20 min-h-screen flex-col items-center gap-8'>
            <h1 className='text-6xl font-Darker_Grotesque mb-4'>About Me</h1>

            <div className='flex flex-col md:flex-row max-w-6xl gap-12 px-6'>
                <div className='flex-1'>

                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>Work History</h2>
                        <p className='text-lg leading-relaxed'>

                        </p>
                    </div>
                </div>

                <div className='flex-1 space-y-6'>
                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>Who I Am</h2>
                        <p className='text-lg leading-relaxed'>
                            Hi! I am Usman Faisal, a developer based in Karachi, Pakistan.Currently I am enrolled in GIAIC, a Governor Initiative Course to equip students with skills in using cutting edge technologies. I have a passion for creating beautiful and functional web solutions, and I am always looking to learn new technologies and improve my skills on my own as well.
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
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>Education</h2>
                        <p className='text-lg leading-relaxed'>
                            I am a High School Graduate and will be starting my University life this year 2025. Aside from my formal education, I have also completed a number of online courses in HTML, CSS, Javascript, and React.js. These courses have provided me with a solid foundation in web development.
                            And as i mentioned above I am enrolled in GIAIC a year long course to equip students with skills in using cutting edge technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default page