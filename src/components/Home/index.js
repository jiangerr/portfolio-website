import Masonry from 'react-masonry-css';
import Photos from '../Photos/Home.json';
import './index.scss';
import React, { useState, useCallback } from 'react';

const Columns = {
    default: 4,
    1500: 3,
    1200: 2,
    900: 1
};

const MinFullsizeHeight = 640;

const Home = () => {
    // used for fullsize image viewer + caption

    // image src + alt text
    const [currentImg, setCurrentImg] = useState(0);
    const [currentImgAlt, setCurrentImgAlt] = useState('');

    // image caption
    const [currentImgSubject, setCurrentImgSubject] = useState('');
    const [currentImgMeet, setCurrentImgMeet] = useState('');
    const [currentImgDate, setCurrentImgDate] = useState('');

    const [viewerOpen, setViewerOpen] = useState(false);

    const openViewer = useCallback((e) => {
        // disable single image viewing if window isn't large enough
        if (window.innerHeight > MinFullsizeHeight && window.innerWidth > window.innerHeight) {
            setCurrentImg(e.target.src);
            setCurrentImgAlt(e.target.alt);
            setCurrentImgSubject(e.target.getAttribute('data-subject'));
            setCurrentImgMeet(e.target.getAttribute('data-meet'));
            setCurrentImgDate(e.target.getAttribute('data-date'));
            setViewerOpen(true);
            // console.log(currentImg);
        }
    }, []);

    const closeViewer = () => {
        setCurrentImg(0);
        setViewerOpen(false);
    };

    // closes out of fullsize image viewer if window becomes too short
    const closeViewerOnHeight = () => {
        if (window.innerHeight < MinFullsizeHeight) {
            closeViewer();
        }
    };
    window.addEventListener('resize', closeViewerOnHeight);

    // prevent onClick from applying to child elements
    const stopChildClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="container">
            {viewerOpen ?
                // single image viewer upon image click
                <div className='image-viewer-background' onClick={closeViewer}>
                    <img className='fullsize-image' src={currentImg} alt={currentImgAlt} onClick={stopChildClick} />
                    <p className='viewer-textzone' onClick={stopChildClick}>
                        {currentImgSubject}
                        <span className='divider'>┊</span>
                        {currentImgMeet}
                        <span className='divider'>┊</span>
                        {currentImgDate}
                    </p>
                </div>
                :
                // default masonry grid homepage
                <div className="home-page">
                    <Masonry breakpointCols={Columns} className="masonry-grid" columnClassName='masonry-grid_column'>
                        {Photos.map(({ id, src, alt, subject, meet, date }) => {
                            return (
                                <div key={id} className='masonry-grid-column'>
                                    <img src={src} alt={alt} data-subject={subject} data-meet={meet} data-date={date} width='90%'
                                        onClick={openViewer} />
                                </div>
                            );
                        })}
                    </Masonry>
                </div>}
        </div>
    );
}

export default Home;