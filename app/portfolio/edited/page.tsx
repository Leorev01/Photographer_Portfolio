import ImageGrid from '@/components/ImageGrid'
import dj from '@/public/images/edited/dj.jpg'
import editedPinkFlower from '@/public/images/edited/edited-pink-flower.jpg'
import fisherman from '@/public/images/edited/fisherman.jpg'
import magazineCoverGirl from '@/public/images/edited/magazine-cover-girl.jpg'


const images = [
    { src: dj, alt: 'DJ' },
    { src: editedPinkFlower, alt: 'Edited Pink Flower' },
    { src: fisherman, alt: 'Fisherman' },
    { src: magazineCoverGirl, alt: 'Magazine Cover Girl' },
]
const EditedPage = () => {
  return (
      <div className="container mx-auto">
        <ImageGrid images={images}/>
      </div>
  )
}

export default EditedPage