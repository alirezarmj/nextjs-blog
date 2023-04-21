import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='w-full mx-auto h-[500px] flex flex-col items-center text-gray-400 bg-zinc-800 gap-3  p-12 '>
            <div>
                <Image src={"/images/site/j-pic.jpg"} height={300} width={300} className="rounded-full" alt='/'/>
            </div>
            <h1 className='lg:text-5xl md:text-2xl text-xl font-bold' >Hi, I&apos;m Javid</h1>
            <p className='text-xl text-center '>I blog about-web development-specially about<br/> frontend frameworks like React.</p>
        </section>
    )
}

export default Hero