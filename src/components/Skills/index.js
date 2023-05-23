import { useEffect, useState } from 'react'
import {
  faHtml5,
  faCss3,
  faSass,
  faJsSquare,
  faReact,
  faGitAlt,

} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import CV from '../../assets/images/JakxcCV.pdf'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
        <div className="container skills-page">
          <div className="text-content">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={'Skills & Experience'.split('')}
                idx={15}
                />
            </h1>
            <p>
                I am familiar with front end tech stacks like <span className='highlight-text'>HTML5</span>, 
                <span className='highlight-text'> CSS3</span>,<span className='highlight-text'> Javascript</span>,
                <span className='highlight-text'> React</span>, <span className='highlight-text'> Typescript</span>, 
                <span className='highlight-text'> Sass</span> and <span className='highlight-text'> Git</span>.
            </p>
            <p>
                I have experience with multiple roles as front end developer and UI/EX Engineer. Throughout my
                time in these roles, I have enhanced my skills as a front end developer many fold through working on 
                commercial projects. I have strong understanding of aesthetics and responsive (mobile first) web design.
                For any project I am assigned to, I strive to optimise the code and user experience.
            </p>
            <p>
                Feel free to visit my <a href='https://www.linkedin.com/in/jack-chen-798696196/'>LinkedIn</a> or 
                take a look at my <a href={CV}>CV</a> for more details. 
            </p>
          </div>
 
          <div className="cube-container">
            <div className="cube-spinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faSass} color="#F06292" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#FFD600" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills