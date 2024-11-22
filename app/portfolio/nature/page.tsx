import ImageGrid from '@/components/ImageGrid'
import cat from '@/public/images/nature/cat.jpg'
import loneTree from '@/public/images/nature/lone-tree.jpg'
import pinkFlowers from '@/public/images/nature/pink-flowers.jpg'
import redFlower from '@/public/images/nature/red-flower.jpg'
import swan from '@/public/images/nature/swan.jpg'
import whiteFlower from '@/public/images/nature/white-flower.jpg'
import yellowGrass from '@/public/images/nature/yellow-grass.jpg'

const images = [
    { src: cat, alt: 'Cat' },
    { src: loneTree, alt: 'Lone Tree' },
    { src: pinkFlowers, alt: 'Pink Flowers' },
    { src: redFlower, alt: 'Red Flowers' },
    { src: swan, alt: 'Swan' },
    { src: whiteFlower, alt: 'White Flower' },
    { src: yellowGrass, alt: 'Yellow Grass' },
]

const NaturePage = () => {
  return (
    <div className="container mx-auto">
        <ImageGrid images={images}/>
    </div>
  )
}

export default NaturePage