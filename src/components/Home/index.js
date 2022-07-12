import LogoEJ from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <img src={LogoEJ} alt="Ethan Jiang" />
                    <br />
                    WELCOME.
                    {/* <br />
                    Ethan Jiang */}
                    <br />
                </h1>
                <h2>roles, etc. FILL IN LATER</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    );
}

export default Home