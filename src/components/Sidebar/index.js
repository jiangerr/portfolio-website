import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import LogoEJ from '../../assets/images/logo.svg'
import { faFlickr, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoEJ} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        <ul className='no-bullets'>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ethanjiangphoto/">
                    <FontAwesomeIcon icon={faInstagramSquare} color="#FFF" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.flickr.com/photos/ethantjiang/albums">
                    <FontAwesomeIcon icon={faFlickr} color="#FFF" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ethantjiang/">
                    <FontAwesomeIcon icon={faLinkedin} color="#FFF" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar