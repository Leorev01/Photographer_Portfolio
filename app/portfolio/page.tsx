import ImageGrid from "@/components/ImageGrid"
import boatImage from '@/public/images/boat-in-night.jpg';
import curlyHairImage from '@/public/images/portrait/curly-hair-girl.jpg';
import jamaicaHouseImage from '@/public/images/jamaica-house.jpg';
import jamaicaStreetImage from '@/public/images/jamaica-street.jpg';
import flowerImage from '@/public/images/nature/white-flower.jpg';
import loneTree from '@/public/images/nature/lone-tree.jpg';
import girlSelfie from '@/public/images/portrait/girl-selfie.jpg';
import londonCity from '@/public/images/london-city.jpg';
import candyShop from '@/public/images/candy-shop.jpg';
import cat from '@/public/images/nature/cat.jpg';
import cherries from '@/public/images/products/cherries.jpg';
import chessBoard from '@/public/images/black-and-white/chess-board.jpg';
import girlBrushHair from '@/public/images/portrait/girl-brush-hair.jpg';
import girlColourfulPillars from '@/public/images/portrait/girl-colourful-pillars.jpg';
import girlDark from '@/public/images/portrait/girl-dark.jpg';
import girlNight from '@/public/images/girl-night.jpg';
import girlOnBalcony from '@/public/images/portrait/girl-on-balcony.jpg';
import girlOnStairs from '@/public/images/portrait/girl-on-stairs.jpg';
import girlOrange from '@/public/images/portrait/girl-orange.jpg';
import girlPointSky from '@/public/images/portrait/girl-point-sky.jpg';
import guyColourBack from '@/public/images/portrait/guy-colour-back.jpg';
import londonUnderground from '@/public/images/black-and-white/london-underground.jpg';
import manPillar from '@/public/images/portrait/man-pillar.jpg';
import pinkFlowers from '@/public/images/nature/pink-flowers.jpg';
import redFlower from '@/public/images/nature/red-flower.jpg';
import swan from '@/public/images/nature/swan.jpg';
import yellowGrass from '@/public/images/nature/yellow-grass.jpg';
import dj from '@/public/images/edited/dj.jpg';
import editedPinkFlower from '@/public/images/edited/edited-pink-flower.jpg';
import fisherman from '@/public/images/edited/fisherman.jpg';
import magazineCoverGirl from '@/public/images/edited/magazine-cover-girl.jpg';
import cholo from '@/public/images/black-and-white/black-and-white-cholo.jpg';
import gangster from '@/public/images/black-and-white/black-and-white-gangster.jpg';
import girl from '@/public/images/black-and-white/black-and-white-girl.jpg';
import legs from '@/public/images/black-and-white/black-and-white-legs.jpg';
import suit from '@/public/images/black-and-white/black-and-white-suit.jpg';

const images = [
  { src: jamaicaHouseImage, alt: 'Jamaica House' },
            { src: jamaicaStreetImage, alt: 'Jamaica Street' },
            { src: curlyHairImage, alt: 'Curly Hair Girl' },
            { src: boatImage, alt: 'Boat in Night' },
            { src: flowerImage, alt: 'White Flower' },
            { src: loneTree, alt: 'Lone Tree' },
            { src: girlSelfie, alt: 'Girl Selfie' },
            { src: londonCity, alt: 'London City' },
            { src: candyShop, alt: 'Candy Shop' },
            { src: cat, alt: 'Cat' },
            { src: cherries, alt: 'Cherries' },
            { src: chessBoard, alt: 'Chess Board' },
            { src: girlBrushHair, alt: 'Girl Brush' },
            { src: girlColourfulPillars, alt: 'Girl with Colourful Pillars' },
            { src: girlDark, alt: 'Girl in Dark' },
            { src: girlNight, alt: 'Girl at Night' },
            { src: girlOnBalcony, alt: 'Girl on Balcony' },
            { src: girlOnStairs, alt: 'Girl on Stairs' },
            { src: girlOrange, alt: 'Girl in Orange' },
            { src: girlPointSky, alt: 'Girl Pointing at Sky' },
            { src: guyColourBack, alt: 'Guy with Colourful Background' },
            { src: londonUnderground, alt: 'London Underground' },
            { src: manPillar, alt: 'Man near Pillar' },
            { src: pinkFlowers, alt: 'Pink Flowers' },
            { src: redFlower, alt: 'Red Flowers' },
            { src: swan, alt: 'Swan' },
            { src: yellowGrass, alt: 'Yellow Grass' },
            { src: dj, alt: 'DJ' },
            { src: editedPinkFlower, alt: 'Edited Pink Flower' },
            { src: fisherman, alt: 'Fisherman' },
            { src: magazineCoverGirl, alt: 'Magazine Cover Girl' },
            { src: cholo, alt: 'Cholo' },
            { src: gangster, alt: 'Gangster' },
            { src: girl, alt: 'Girl' },
            { src: legs, alt: 'Legs' },
            { src: suit, alt: 'Suit' },
]
const page = () => {
  return (
      <div className="container mx-auto">
        <ImageGrid images={images}/>
      </div>
  )
}

export default page