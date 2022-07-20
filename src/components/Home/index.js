// import LogoEJ from '../../assets/images/logo.svg';
import Masonry from 'react-masonry-css';
import Photos from '../Photos/Home.json';
// import { Link } from 'react-router-dom';
import './index.scss';

const Columns = {
    default: 4,
    1500: 3,
    1200: 2,
    900: 1
};

const Home = () => {
    return (
        <div className="container home-page">
            <Masonry breakpointCols={Columns} className="masonry-grid" columnClassName='masonry-grid_column'>
                {Photos.map(({ id, src, alt }) => {
                    return (
                        <div key={id} className="masonry-grid-column">
                            <img src={src} alt={alt} width="90%"/>
                        </div>
                    );
                })}
            </Masonry>
            {/*<div className="text-zone">
                <h1>
                    <img src={LogoEJ} alt="Ethan Jiang" />
                    <br />
                    WELCOME.
                    <br />
                    Ethan Jiang
                    <br />
                </h1>
                <h2>roles, etc. FILL IN LATER</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div> */}
        </div>
    );
}

export default Home