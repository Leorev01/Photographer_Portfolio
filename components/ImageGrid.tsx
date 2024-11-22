import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageProps {
  src: StaticImageData;
  alt: string;
}

const PhotographerPortfolio = ({ images }: { images: ImageProps[] }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Image Gallery */}
      <section className="py-16 px-5 lg:px-20 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
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
