import ImageGrid from '@/components/ImageGrid'
import curlyHairGirl from '@/public/images/portrait/curly-hair-girl.jpg'
import girlBrushHair from '@/public/images/portrait/girl-brush-hair.jpg'
import girlColourfulPillars from '@/public/images/portrait/girl-colourful-pillars.jpg'
import girlDark from '@/public/images/portrait/girl-dark.jpg'
import girlOnBalcony from '@/public/images/portrait/girl-on-balcony.jpg'
import girlOnStairs from '@/public/images/portrait/girl-on-stairs.jpg'
import girlOrange from '@/public/images/portrait/girl-orange.jpg'
import girlPointSky from '@/public/images/portrait/girl-point-sky.jpg'
import girlSelfie from '@/public/images/portrait/girl-selfie.jpg'
import guyColourBack from '@/public/images/portrait/guy-colour-back.jpg'
import kingVon from '@/public/images/portrait/king-von.jpg'
import manPillar from '@/public/images/portrait/man-pillar.jpg'

const images =[
    { src: curlyHairGirl, alt: 'Curly Hair Girl' },
    { src: girlBrushHair, alt: 'Girl Brush' },
    { src: girlColourfulPillars, alt: 'Girl with Colourful Pillars' },
    { src: girlDark, alt: 'Girl in Dark' },
    { src: girlOnBalcony, alt: 'Girl on Balcony' },
    { src: girlOnStairs, alt: 'Girl on Stairs' },
    { src: girlOrange, alt: 'Girl in Orange' },
    { src: girlPointSky, alt: 'Girl Pointing at Sky' },
    { src: girlSelfie, alt: 'Girl Selfie' },
    { src: guyColourBack, alt: 'Guy with Colourful Background' },
    { src: kingVon, alt: 'King Von' },
    { src: manPillar, alt: 'Man near Pillar' },
]
const PortraitPage = () => {
  return (
    <div className="container mx-auto">
        <ImageGrid images={images}/>
    </div>
  )
}

export default PortraitPage