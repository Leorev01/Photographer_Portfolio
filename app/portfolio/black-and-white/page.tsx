import ImageGrid from '@/components/ImageGrid'
import Cholo from '@/public/images/black-and-white/black-and-white-cholo.jpg'
import gangster from '@/public/images/black-and-white/black-and-white-gangster.jpg'
import girl from '@/public/images/black-and-white/black-and-white-girl.jpg'
import legs from '@/public/images/black-and-white/black-and-white-legs.jpg'
import suit from '@/public/images/black-and-white/black-and-white-suit.jpg'
import chessBoard from '@/public/images/black-and-white/chess-board.jpg'
import londonUnderground from '@/public/images/black-and-white/london-underground.jpg'

const images = [
    { src: Cholo, alt: 'Cholo' },
    { src: gangster, alt: 'Gangster' },
    { src: girl, alt: 'Girl' },
    { src: legs, alt: 'Legs' },
    { src: suit, alt: 'Suit' },
    { src: chessBoard, alt: 'Chess Board' },
    { src: londonUnderground, alt: 'London Underground' },
]

const BlackAndWhitePage = () => {
  return (
    <div className="container mx-auto">
        <ImageGrid images={images}/>
      </div>
  )
}

export default BlackAndWhitePage