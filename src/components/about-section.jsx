import Image from 'next/image'

export default function AboutSection() {
    return (
        <section id="about" className='text-black px-6 md:px-12 lg:px-24 mt-12 scroll-mt-4 pt-12'>
            {/* Languages and Tools */}
            <h1 className='font-semibold text-xl'>Languages and Tools</h1>
            <div className='relative mb-5'>
                <div className='absolute w-[55px] h-0.5 rounded-full bg-gray-300 mt-1 z-0' />
                <div className='absolute w-8 h-0.5 rounded-full bg-blue-500 mt-1 z-10' />
            </div>
            <div className='flex flex-wrap gap-5 md:gap-6 mb-8'>
                <Image src={"/kotlin.svg"} width={50} height={50} alt="Kotlin" />
                <Image src={"/flutter.svg"} width={50} height={50} alt="Flutter" />
                <Image src={"/firebase.svg"} width={50} height={50} alt="Firebase" />
                <Image src={"/dart.svg"} width={50} height={50} alt="Dart" />
                <Image src={"/html.svg"} width={50} height={50} alt="HTML" />
                <Image src={"/css.svg"} width={50} height={50} alt="CSS" />
                <Image src={"/js.svg"} width={50} height={50} alt="JavaScript" />
                <Image src={"/golang.svg"} width={50} height={50} alt="Go" />
                <Image src={"/nodejs.svg"} width={50} height={50} alt="Node.js" />
                <Image src={"/nextjs.svg"} width={50} height={50} alt="Next.js" />
                <Image src={"/react.svg"} width={50} height={50} alt="React" />
                <Image src={"/mysql.svg"} width={50} height={50} alt="MySQL" />
            </div>

            {/* Project */}
            <h1 className="font-semibold text-xl">Project</h1>
            <div className='relative mb-6'>
                <div className='absolute w-20.5 h-0.5 rounded-full bg-gray-300 mt-1 z-0' />
                <div className='absolute w-8 h-0.5 rounded-full bg-blue-500 mt-1 z-10' />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div className="group relative w-full h-60 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Image
                        src={"/assets/mockup.png"}
                        fill
                        alt="Whisperz"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-base">Whisperz</h3>
                        <p className="text-gray-200 text-sm">Chatting App &bull; Flutter & Firebase</p>
                    </div>
                </div>

                <div className="group relative w-full h-60 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Image
                        src={"/assets/ezemkofi.png"}
                        fill
                        alt="Ezemkofi"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-base">Ezemkofi</h3>
                        <p className="text-gray-200 text-sm">Coffee Ordering App &bull; Kotlin</p>
                    </div>
                </div>

                <div className="group relative w-full h-60 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Image
                        src={"/assets/ngodingin.png"}
                        fill
                        alt="NgodingIn"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-base">NgodingIn</h3>
                        <p className="text-gray-200 text-sm">Online Course Platform &bull; Flutter</p>
                    </div>
                </div>

                <div className="group relative w-full h-60 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Image
                        src={"/assets/agronoma.png"}
                        fill
                        alt="Agronoma"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-base">Agronoma</h3>
                        <p className="text-gray-200 text-sm">Planting Assistant App &bull; Flutter</p>
                    </div>
                </div>
            </div>

            {/* Certificate */}
            <h1 className='font-semibold text-xl'>Certificate</h1>
            <div className='relative mb-6'>
                <div className='absolute w-29.5 h-0.5 rounded-full bg-gray-300 mt-1 z-0' />
                <div className='absolute w-8 h-0.5 rounded-full bg-blue-500 mt-1 z-10' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8'>
                <div className='w-full h-60 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={"/assets/ubig.jpeg"}
                            fill
                            alt="UBIG Certificate"
                            className='object-cover'
                            loading='lazy'
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3'>
                            <h3 className='text-white font-semibold text-base'>Bootcamp LKS Batch #2</h3>
                            <p className='text-white text-sm opacity-90'>2024 &bull; Mobile and Desktop App Development</p>
                        </div>
                    </div>
                </div>

                <div className='w-full h-60 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={"/assets/ITSSB.jpg"}
                            fill
                            alt="ITSSB Certificate"
                            className='object-cover'
                            loading='lazy'
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3'>
                            <h3 className='text-white font-semibold text-base'>IT Software Solution For Bussiness</h3>
                            <p className='text-white text-sm opacity-90'>2024 &bull; Mobile and Desktop App Development</p>
                        </div>
                    </div>
                </div>

                <div className='w-full h-60 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={"/assets/speaker1.png"}
                            fill
                            alt="GDGoC PENS Speaker Certificate"
                            className='object-cover'
                            loading='lazy'
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3'>
                            <h3 className='text-white font-semibold text-base'>GDGoC PENS Speaker</h3>
                            <p className='text-white text-sm opacity-90'>2026 &bull; Hands-on Flutter: Dynamic UI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
