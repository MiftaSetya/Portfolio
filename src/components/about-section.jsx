import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
    return (
        <section id="about" className='text-black px-30 mt-16 scroll-mt-5 pt-16'>
            {/* Languages and Tools */}
            <h1 className='font-semibold text-2xl'>Languages and Tools</h1>
            <div className='relative mb-6'>
                <div className='absolute w-[245px] h-[2px] rounded-full bg-gray-300 mt-1 z-0' />
                <div className='absolute w-8 h-[2px] rounded-full bg-blue-500 mt-1 z-10' />
            </div>
            <div className='flex gap-8 mb-10'>
                <Image src={"/kotlin.svg"} width={50} height={50} />
                <Image src={"/flutter.svg"} width={50} height={50} />
                <Image src={"/firebase.svg"} width={60} height={50} />
                <Image src={"/dart.svg"} width={50} height={50} />
                <Image src={"/html.svg"} width={50} height={50} />
                <Image src={"/css.svg"} width={50} height={50} />
                <Image src={"/js.svg"} width={50} height={50} />
                <Image src={"/c.svg"} width={50} height={50} />
                <Image src={"/csharp.svg"} width={50} height={50} />
                <Image src={"/golang.svg"} width={50} height={50} />
                <Image src={"/nodejs.svg"} width={55} height={55} />
                <Image src={"/nextjs.svg"} width={50} height={50} />
                <Image src={"/react.svg"} width={50} height={50} />
                <Image src={"/tailwind.svg"} width={50} height={50} />
                <Image src={"/mysql.svg"} width={60} height={60} />
                <Image src={"/postman.svg"} width={50} height={50} />
            </div>

            {/* Project */}
            <h1 className="font-semibold text-2xl">Project</h1>
            <div className="relative mb-8">
                <div className="absolute w-[82px] h-[2px] rounded-full bg-gray-300 mt-1 z-0" />
                <div className="absolute w-8 h-[2px] rounded-full bg-blue-500 mt-1 z-10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="group relative w-full h-[270px] bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Image
                        src={"/assets/mockup.png"}
                        fill
                        alt="Whisperz"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg">Whisperz</h3>
                        <p className="text-gray-200 text-sm">Chatting App • Flutter & Firebase</p>
                    </div>
                </div>

                <div className="group relative w-full h-[270px] bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Image
                        src={"/assets/ezemkofi.png"}
                        fill
                        alt="Ezemkofi"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg">Ezemkofi</h3>
                        <p className="text-gray-200 text-sm">Coffee Ordering App • Kotlin</p>
                    </div>
                </div>

                <div className="group relative w-full h-[270px] bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Image
                        src={"/assets/ngodingin.png"}
                        fill
                        alt="NgodingIn"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg">NgodingIn</h3>
                        <p className="text-gray-200 text-sm">Online Course Platform • Flutter</p>
                    </div>
                </div>
            </div>


            {/* Certificate */}
            <h1 className='font-semibold text-2xl'>Certificate</h1>
            <div className='relative mb-8'>
                <div className='absolute w-[118px] h-[2px] rounded-full bg-gray-300 mt-1 z-0' />
                <div className='absolute w-8 h-[2px] rounded-full bg-blue-500 mt-1 z-10' />
            </div>
            <div className='grid grid-cols-3 gap-8 mb-10'>
                <div className='w-full h-[270px] bg-white rounded-xl border border-gray-200 overflow-hidden 
                transition-all duration-200 hover:shadow-lg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={"/assets/ubig.jpeg"}
                            fill
                            alt="UBIG Certificate"
                            className='object-cover'
                            loading='lazy'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                            <h3 className='text-white font-semibold text-lg'>Bootcamp LKS Batch #2</h3>
                            <p className='text-white text-sm opacity-90'>2024 • Mobile and Desktop App Development</p>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[270px] bg-white rounded-xl border border-gray-200 overflow-hidden 
                transition-all duration-200 hover:shadow-lg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={"/assets/ITSSB.jpg"}
                            fill
                            alt="ITSSB Certificate"
                            className='object-cover'
                            loading='lazy'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                            <h3 className='text-white font-semibold text-lg'>IT Software Solution For Bussiness</h3>
                            <p className='text-white text-sm opacity-90'>2024 • Mobile and Desktop App Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
                