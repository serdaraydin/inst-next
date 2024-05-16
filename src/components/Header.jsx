import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            {/* Logo  */}

            <Link href="/">
                <Image className='hidden lg:inline-flex' src={"/Instagram_logo_black.webp"} width={96} height={96} alt="instagram logo" />
            </Link>
            <Link href="/">
                <Image className='lg:hidden' src={"/800px-Instagram_logo_2016.webp"} width={40} height={40} alt="instagram logo" />
            </Link>

            {/* search Input   */}
            <input type="text" placeholder='Search...' className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]' />

            {/* menu items  */}
            <button className='text-sm font-semibold text-blue-500'>Login</button>
        </div>
    </div>
  )
}
