import Link from 'next/link'
import React from 'react'
import Logo from './logo'

const MainNavigation = () => {
    return (
        <div className='w-full h-[90px] px-8  bg-zinc-600 text-white'>
            <div className='max-w-[1200px] h-full  mx-auto  flex justify-between items-center  '>
                <Link href={"/"}><Logo /></Link>
                <ul className='flex justify-between items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
                    <li className='lg:text-xl md:text-lg text-sm font-bold'><Link href={"/posts"}>Posts</Link></li>
                    <li className='lg:text-xl md:text-lg text-sm font-bold'><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MainNavigation