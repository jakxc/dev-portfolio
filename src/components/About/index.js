import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import planetImg from '../../assets/images/planet.png'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-content">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About Me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Hello, my name is Jack (a.k.a jakxc). I am a front end developer and aspiring Game (Unity)
            developer. My interest in developing things through code is ever expanding. I am always 
            looking for 
          </p>
          <p>
            I have used multiple front end tech stacks throughout my career. Some pretty niche 
            (such as QT/QML) and some more mainstream. I am always looking to improve on the 
            tech stacks I am familiar with as well as gain as many new skill sets with others
            as possible. I view this as important because the tech world is ever changing.
          </p>
          <p>
            Aside from coding, I am an avid manga and anime enthusiast. I also love playing
            strategy games such as TFT and FPS games such as Valorant in my free time. I love
            cycling, and often do it as a primary source of exercise.
          </p>
        </div>
        <div className='image-container'>
          <img
            className="planet-image"
            src={planetImg}
            alt="Planet"
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About