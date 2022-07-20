import './index.scss';
import AboutPicture from './about-picture.jpg';

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>NICE TO MEET YOU.</h1>
            </div>
            <div className='picture-zone'>
                <img src={AboutPicture} alt='Ethan Jiang' />
            </div>
        </div>
    );
}

export default About