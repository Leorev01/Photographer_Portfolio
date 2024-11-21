import Image from 'next/image';
import boatImage from '@/public/images/boat-in-night.jpg';
import curlyHairImage from '@/public/images/curly-hair-girl.jpg';
import jamaicaHouseImage from '@/public/images/jamaica-house.jpg';
import jamaicaStreetImage from '@/public/images/jamaica-street.jpg';
import flowerImage from '@/public/images/white-flower.jpg';
import loneTree from '@/public/images/lone-tree.jpg';
import girlSelfie from '@/public/images/girl-selfie.jpg';
import londonCity from '@/public/images/london-city.jpg';
import candyShop from '@/public/images/candy-shop.jpg';
import cat from '@/public/images/cat.jpg';
import cherries from '@/public/images/cherries.jpg';
import chessBoard from '@/public/images/chess-board.jpg';
import girlBrushHair from '@/public/images/girl-brush-hair.jpg';
import girlColourfulPillars from '@/public/images/girl-colourful-pillars.jpg';
import girlDark from '@/public/images/girl-dark.jpg';
import girlNight from '@/public/images/girl-night.jpg';
import girlOnBalcony from '@/public/images/girl-on-balcony.jpg';
import girlOnStairs from '@/public/images/girl-on-stairs.jpg';
import girlOrange from '@/public/images/girl-orange.jpg';
import girlPointSky from '@/public/images/girl-point-sky.jpg';
import guyColourBack from '@/public/images/guy-colour-back.jpg';
import londonUnderground from '@/public/images/london-underground.jpg';
import manPillar from '@/public/images/man-pillar.jpg';
import pinkFlowers from '@/public/images/pink-flowers.jpg';
import redFlower from '@/public/images/red-flower.jpg';
import swan from '@/public/images/swan.jpg';
import yellowGrass from '@/public/images/yellow-grass.jpg';

const PhotographerPortfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Image Gallery */}
      <section className="py-16 px-5 lg:px-20 bg-black">
        <h2 className="text-4xl font-bold mb-12 text-center">My Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
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
          ].map((image, index) => (
            <div
              key={index}
              className="relative h-72 sm:h-96 lg:h-[400px] xl:h-[500px] group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhotographerPortfolio;
