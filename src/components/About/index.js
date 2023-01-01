import './index.scss';
import AboutPicture from './about-picture2.jpeg';

const About = () => {
    return (
        <div className='container about-page'>
            <div className='toptext-zone'>
                <h1>NICE TO MEET YOU.</h1>
            </div>
            <div className='flex-zone-wrapper'>
                <div className='flex-zone'>
                    <div className='picture-zone'>
                        <img src={AboutPicture} alt='Ethan Jiang' />
                    </div>
                    <div className='text-zone'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About