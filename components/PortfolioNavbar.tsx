import Link from 'next/link'
import React from 'react'

const PortfolioNavbar = () => {
  return (
    <div className='flex justify-center space-x-4 pt-24 bg-black'>
        <Link href={"/portfolio"} className='text-white hover:scale-110'>All</Link>
        <Link href={"/portfolio/portrait"} className='text-white hover:scale-110'>Portrait</Link>
        <Link href={"/portfolio/nature"} className='text-white hover:scale-110'>Nature</Link>
        <Link href={"/portfolio/product"} className='text-white hover:scale-110'>Product</Link>
        <Link href={"/portfolio/edited"} className='text-white hover:scale-110'>Edited</Link>
        <Link href={"/portfolio/other"} className='text-white hover:scale-110'>Black and White</Link>
    </div>
  )
}

export default PortfolioNavbar