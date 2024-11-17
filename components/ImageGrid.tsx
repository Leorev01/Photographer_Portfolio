import Image from 'next/image'
import boatImage from '@/public/images/boat-in-night.jpg'
import curlyHairImage from '@/public/images/curly-hair-girl.jpg'
import jamaicaHouseImage from '@/public/images/jamaica-house.jpg'
import jamaicaStreetImage from '@/public/images/jamaica-street.jpg'
import flowerImage from '@/public/images/white-flower.jpg'

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-20">
      {/* First image spans two columns and has a taller height on larger screens */}
      <div className="relative col-span-2 h-72 sm:h-96 lg:h-[400px]">
        <Image 
          src={jamaicaHouseImage} 
          alt="Jamaica house" 
          className="object-cover w-full h-full rounded-lg shadow-lg transition-all duration-300 hover:scale-105" 
        />
      </div>
      
      {/* Second image */}
      <div className="relative h-72 sm:h-96 lg:h-[400px]">
        <Image 
          src={jamaicaStreetImage} 
          alt="jamaica street" 
          className="object-cover w-full h-full rounded-lg shadow-lg transition-all duration-300 hover:scale-105" 
        />
      </div>

      {/* Third image */}
      <div className="relative h-72 sm:h-96 lg:h-80">
        <Image 
          src={curlyHairImage} 
          alt="Curly hair girl" 
          className="object-cover w-full h-full rounded-lg shadow-lg transition-all duration-300 hover:scale-105" 
        />
      </div>

      {/* Fourth image */}
      <div className="relative h-72 sm:h-96 lg:h-80">
        <Image 
          src={boatImage} 
          alt="Boat in night" 
          className="object-cover w-full h-full rounded-lg shadow-lg transition-all duration-300 hover:scale-105" 
        />
      </div>

      {/* Fifth image */}
      <div className="relative h-72 sm:h-96 lg:h-80">
        <Image 
          src={flowerImage} 
          alt="White flower" 
          className="object-cover w-full h-full rounded-lg shadow-lg transition-all duration-300 hover:scale-105" 
        />
      </div>
    </div>
  )
}

export default ImageGrid
