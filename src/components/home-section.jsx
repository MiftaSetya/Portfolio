import Image from 'next/image'

export default function HomeSection() {
    return (
        <section id="home" className='flex flex-col md:flex-row px-6 md:px-12 lg:px-24 xl:px-48 mt-16 md:mt-24 scroll-mt-20 md:scroll-mt-40 justify-center items-center gap-8 md:gap-12'>
            <div className='relative w-36 h-36 sm:w-44 sm:h-44 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-145 xl:h-145 border-[10px] md:border-16 border-white rounded-full shadow-lg overflow-hidden'>
                <Image
                    src="/assets/profile.jpg"
                    fill
                    className='object-cover'
                    alt="Profile"
                    loading="eager"
                    sizes="(max-width: 768px) 144px, (max-width: 1024px) 384px, 580px"
                />
            </div>
            <div className='w-fit h-full text-center md:text-left'>
                <h1 className='text-sm sm:text-base md:text-lg text-gray-400'>Mobile App Developer</h1>
                <h1 className='font-bold py-2 md:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-gray-800 mb-1'>Mifta Setya Pratama</h1>
                <p className='text-gray-500 text-sm md:text-base'>Hey! I&apos;m Mifta, a Mobile App Developer who enjoys turning ideas into functional and user-friendly applications. I&apos;m a student majoring in Informatics Engineering at Electronics Engineering Polytechnic Institute of Surabaya. I have experience developing mobile applications using Kotlin and Flutter, integrating with Firebase or RESTful APIs. I&apos;m also learning web development with Next.js and Go (Golang) to expand my skill as a developer. I&apos;m passionate about continuous learning and creating applications that make a real impact.</p>
            </div>
        </section>
    )
}
