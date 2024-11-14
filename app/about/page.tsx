import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex py-20 min-h-screen flex-col items-center gap-8'>
            <h1 className='text-6xl font-Darker_Grotesque mb-4'>About Me</h1>

            <div className='flex flex-col md:flex-row max-w-6xl gap-12 px-6'>
                <div className='flex-1'>

                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>Work Experience</h2>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex items-center gap-2'>




                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex-1 space-y-6'>
                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>Who I Am</h2>
                        <p className='text-lg leading-relaxed'>
                            Hi! I am Usman Faisal, a developer based in Karachi, Pakistan.
                            Currently I am enrolled in a year long course GIAIC,
                            a Sindh Governor IT initiative to teach students to build real world projects by using the latest technologies.
                            and aside from this course I am always exploring and learning new things independently.
                        </p>
                    </div>

                    <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl'>
                        <h2 className='text-3xl font-Darker_Grotesque mb-4'>Current Main Stack</h2>
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
                            I am a High School Graduate and will be starting my University life this year 2025. Aside from my formal education, I have also completed a number of online courses in HTML, CSS, Javascript, and React.js.
                            These courses have provided me with a solid foundation in web development.
                            And as i mentioned above I am enrolled in GIAIC, a year long course to learn and build real world project and contribute to solving real world problems.
                        </p>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default page