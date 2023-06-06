import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portalImage from '../../assets/images/portal.png'

const Contact = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [letterClass, setLetterClass] = useState('text-animate');
    const [formData, setFormData] = useState(initialFormData)

    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID, 
            process.env.REACT_APP_EMAIL_TEMPLATE_ID, 
            form.current, 
            process.env.REACT_APP_EMAIL_USER_ID)
        .then(
            () => {
                alert('Message successfully sent!')
                setFormData(initialFormData);
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-content">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'Contact Me'.split('')}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in any and all front end development opportunities. Feel free to 
                        contact me below if you have any enquries or just want to get in touch!
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={handleSubmit}>
                        <ul>
                            <li className="half">
                                <input 
                                    placeholder="First Name" 
                                    type="text" 
                                    name="firstName" 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required 
                                />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Last Name"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message or Comments"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="form-button" value="SEND" />
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>
                <div className='image-container'>
                    <img
                        className="portal-image"
                        src={portalImage}
                        alt="Portal"
                    />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact