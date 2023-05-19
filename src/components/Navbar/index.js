import './index.scss'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/jakxc-logo-color.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faBook,
    faProjectDiagram,
    faEnvelope,
    faBars,
    faClose
  } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className='nav-bar'>
          <Link className='logo' to='/' >
            <img src={logo} alt='Logo'/>
          </Link>
          <nav className={showNav ? 'mobile-show' : ''}>
              <NavLink 
                to='/'
              >
                <FontAwesomeIcon icon={faHome} color='4d4d4e'/>
              </NavLink>
              <NavLink 
                className= "about-link"
                to='/about'>
                  <FontAwesomeIcon icon={faUser} color='4d4d4e'/>
              </NavLink>
              <NavLink
                className= "skills-link"
                to="/skills"
              >
                <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
              </NavLink>
              <NavLink
                className= "portfolio-link"
                to="/portfolio"
              >
                <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
              </NavLink>
              <NavLink 
                className="contact-link"
                to='/contact'>
                  <FontAwesomeIcon icon={faEnvelope} color='4d4d4e'/>
              </NavLink>
              <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon' 
              />
            </nav>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/jack-chen-798696196/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jakxc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ray.jxc/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </li>
          </ul>
          <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />
      </div>
    )
}

export default Navbar;