import Image from 'next/image'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className='px-24 mb-12 text-black'>
      <h1 className='font-semibold text-xl'>Contact</h1>
      <div className='relative mb-6'>
        <div className='absolute w-[82px] h-[2px] bg-gray-300 mt-1 z-0' />
        <div className='absolute w-8 h-[2px] bg-blue-500 mt-1 z-10' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {/* Instagram */}
        <div className='flex flex-col bg-white h-[240px] rounded-xl border border-gray-200 justify-center items-center p-5 
                  transition-all duration-300 hover:shadow-lg hover:border-purple-500 hover:transform hover:scale-105'>
          <div className='flex w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
                   justify-center items-center mb-3 shadow-md'>
            <Image src={"/instagram.svg"} width={36} height={36} alt="Instagram" className='filter brightness-0 invert' />
          </div>
          <h1 className='py-2 font-semibold text-lg text-gray-800'>Instagram</h1>
          <h2 className='text-gray-600 text-base mb-2'>@mftasty_</h2>
          <Link href="https://instagram.com/mftasty_" target='blank'>
            <button className='mt-2 px-5 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                      rounded-full text-sm font-medium hover:shadow-md transition-all'>
              Follow
            </button>
          </Link>
        </div>

        {/* LinkedIn */}
        <div className='flex flex-col bg-white h-[240px] rounded-xl border border-gray-200 justify-center items-center p-5 
                  transition-all duration-300 hover:shadow-lg hover:border-blue-600 hover:transform hover:scale-105'>
          <div className='flex w-14 h-14 bg-blue-600 rounded-full justify-center items-center mb-3 shadow-md'>
            <Image src={"/linkedin.svg"} width={28} height={28} alt="LinkedIn" className='filter brightness-0 invert' />
          </div>
          <h1 className='py-2 font-semibold text-lg text-gray-800'>LinkedIn</h1>
          <h2 className='text-gray-600 text-base mb-2'>Mifta Setya Pratama</h2>
          <Link href="https://linkedin.com/in/MiftaSetya">
            <button className='mt-2 px-5 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 
                      transition-all'>
              Connect
            </button>
          </Link>
        </div>

        {/* GitHub */}
        <div className='flex flex-col bg-white h-[240px] rounded-xl border border-gray-200 justify-center items-center p-5 
                  transition-all duration-300 hover:shadow-lg hover:border-gray-800 hover:transform hover:scale-105'>
          <div className='flex w-14 h-14 bg-gray-800 rounded-full justify-center items-center mb-3 shadow-md'>
            <Image src={"/github.svg"} width={30} height={30} alt="GitHub" className='filter brightness-0 invert' />
          </div>
          <h1 className='py-2 font-semibold text-lg text-gray-800'>GitHub</h1>
          <h2 className='text-gray-600 text-base mb-2'>MiftaSetya</h2>
          <Link href="https://github.com/MiftaSetya">
            <button className='mt-2 px-5 py-1.5 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-900 
                      transition-all'>
              Follow
            </button>
          </Link>
        </div>

        {/* Telegram */}
        <div className='flex flex-col bg-white h-[240px] rounded-xl border border-gray-200 justify-center items-center p-5 
                  transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:transform hover:scale-105'>
          <div className='flex w-14 h-14 bg-blue-400 rounded-full justify-center items-center mb-3 shadow-md'>
            <Image src={"/telegram.svg"} width={30} height={30} alt="Telegram" className='filter brightness-0 invert mr-1' />
          </div>
          <h1 className='py-2 font-semibold text-lg text-gray-800'>Telegram</h1>
          <h2 className='text-gray-600 text-base mb-2'>@mipxz</h2>
          <Link href="https://t.me/mipxz">
            <button className='mt-2 px-5 py-1.5 bg-blue-400 text-white rounded-full text-sm font-medium hover:bg-blue-500 
                      transition-all'>
              Contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
