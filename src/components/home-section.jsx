import Image from 'next/image'
import React from 'react'

export default function HomeSection() {
    return (
        <section id="home" className='flex px-56 mt-30 scroll-mt-44 justify-center items-center gap-14'>
            <div className='relative w-[650px] aspect-square border-[18px] border-white rounded-full shadow-lg overflow-hidden'>
                <Image
                    src="/assets/profile.jpg"
                    fill
                    className='object-cover'
                    alt="Profile"
                />
            </div>
            <div className='w-fit h-full'>
                <h1 className='text-[18px] text-gray-400 '>Mobile App Developer</h1>
                <h1 className='font-bold py-3 text-[42px] text-gray-800 mb-1'>Mifta Setya Pratama</h1>
                <h1 className='text-gray-500'>Hey! I'm Mifta, a fresh but enthusiastic Mobile App Developer who loves turning ideas into functional apps. Now I am a student majoring in informatics engineering at Electronics Engineering Polytechnic Institute of Surabaya. My playground includes Flutter for cross-platform, integration with Firebase or REST APIs, and also build website with Next JS </h1>
            </div>
        </section>
    )
}
