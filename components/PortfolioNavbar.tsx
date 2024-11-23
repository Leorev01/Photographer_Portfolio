import Link from 'next/link'
import React from 'react'

const PortfolioNavbar = () => {
  return (
    <div className='flex justify-center space-x-4 pt-24'>
        <Link href={"/portfolio"} className='text-white border-b-white border-b-2 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-md'>All</Link>
        <Link href={"/portfolio/portrait"} className='text-white border-b-white border-b-2 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-md'>Portrait</Link>
        <Link href={"/portfolio/nature"} className='text-white border-b-white border-b-2 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-md'>Nature</Link>
        <Link href={"/portfolio/sports"} className='text-white border-b-white border-b-2 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-md'>Sports</Link>
        <Link href={"/portfolio/product"} className='text-white border-b-white border-b-2 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-md'>Product</Link>
        <Link href={"/portfolio/edited"} className='text-white border-b-white border-b-2 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-md'>Edited</Link>
        <Link href={"/portfolio/black-and-white"} className='text-white border-b-white border-b-2 hover:scale-110 hover:bg-white hover:text-black p-2 rounded-md'>Black and White</Link>
    </div>
  )
}

export default PortfolioNavbar