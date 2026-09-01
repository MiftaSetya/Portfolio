import Image from 'next/image'

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
                <h1 className='text-gray-500'>Hey! I'm Mifta, a Mobile App Developer who enjoys turning ideas into functional and user-friendly applications. I'm a student majoring in Informatics Engineering at Electronics Engineering Polytechnic Institute of Surabaya. I have experience developing mobile applications using Kotlin and Flutter, integrating with Firebase or RESTful APIs. I’m also learning web development with Next.js and Go (Golang) to expand my skill as a developer. I’m passionate about continuous learning and creating applications that make a real impact.</h1>
            </div>
        </section>
    )
}
