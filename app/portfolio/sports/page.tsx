import ImageGrid from '@/components/ImageGrid'
import dribble from '@/public/images/sports/basketall-dribble.jpg';
import dunk from '@/public/images/sports/basketball-dunk.jpg';
import layup from '@/public/images/sports/basketball-layup.jpg';
import shot from '@/public/images/sports/basketball-shot.jpg';

const images = [
    { src: dribble, alt: 'Dribble' },
    { src: dunk, alt: 'Dunk' },
    { src: layup, alt: 'Layup' },
    { src: shot, alt: 'Shot' },
]

const SportsPage = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mt-4 text-white">Sports Photos</h1>
        <ImageGrid images={images}/>
    </div>
  )
}

export default SportsPage