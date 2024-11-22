import ImageGrid from '@/components/ImageGrid'
import React from 'react'
import chessBoard from '@/public/images/black-and-white/chess-board.jpg'
import cherries from '@/public/images/products/cherries.jpg'
const images = [
    { src: chessBoard, alt: 'Chess Board' },
    { src: cherries, alt: 'Cherries' },
]

const ProductPage = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mt-4 text-white">Product Photos</h1>
        <ImageGrid images={images}/>
      </div>
  )
}

export default ProductPage