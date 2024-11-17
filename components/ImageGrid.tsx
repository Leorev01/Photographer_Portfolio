import Image from 'next/image'
import boatImage from '@/public/images/boat-in-night.jpg'
import curlyHairImage from '@/public/images/curly-hair-girl.jpg'
import jamaicaHouseImage from '@/public/images/jamaica-house.jpg'
import jamaicaStreetImage from '@/public/images/jamaica-street.jpg'
import flowerImage from '@/public/images/white-flower.jpg'
import loneTree from '@/public/images/lone-tree.jpg'
import girlSelfie from '@/public/images/girl-selfie.jpg'
import londonCity from '@/public/images/london-city.jpg'

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 lg:px-20">
      
      {/* First image spans two columns */}
      <div className="relative col-span-2 lg:col-span-1 h-72 sm:h-96 lg:h-[500px] xl:h-[600px] group">
        <Image 
          src={jamaicaHouseImage} 
          alt="Jamaica house" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>
      
      {/* Second image spans one column */}
      <div className="relative h-72 sm:h-96 lg:h-[400px] xl:h-[500px] group">
        <Image 
          src={jamaicaStreetImage} 
          alt="Jamaica street" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Third image spans two columns */}
      <div className="relative col-span-2 h-72 sm:h-96 lg:h-[500px] xl:h-[600px] group">
        <Image 
          src={curlyHairImage} 
          alt="Curly hair girl" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Fourth image spans one column */}
      <div className="relative h-72 sm:h-96 lg:h-[400px] xl:h-[500px] group">
        <Image 
          src={boatImage} 
          alt="Boat in night" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Fifth image spans three columns */}
      <div className="relative col-span-3 lg:col-span-2 h-72 sm:h-96 lg:h-[500px] xl:h-[600px] group">
        <Image 
          src={flowerImage} 
          alt="White flower" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* New image 1 */}
      <div className="relative h-72 sm:h-96 lg:h-[400px] xl:h-[500px] group">
        <Image 
          src={loneTree} 
          alt="Lone tree" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* New image 2 spans two columns */}
      <div className="relative col-span-2 lg:col-span-1 h-72 sm:h-96 lg:h-[500px] xl:h-[600px] group">
        <Image 
          src={girlSelfie} 
          alt="Girl selfie" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* New image 3 spans one column */}
      <div className="relative h-72 sm:h-96 lg:h-[400px] xl:h-[500px] group">
        <Image 
          src={londonCity} 
          alt="London city" 
          className="object-cover w-full h-full rounded-lg shadow-2xl group-hover:scale-105 transition-all duration-300"
        />
      </div>

    </div>
  )
}

export default ImageGrid;
