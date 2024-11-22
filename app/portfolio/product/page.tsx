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
        <ImageGrid images={images}/>
      </div>
  )
}

export default ProductPage