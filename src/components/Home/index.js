// import LogoEJ from '../../assets/images/logo.svg';
import Masonry from 'react-masonry-css';
import Photos from '../Photos/Home.json';
// import { Link } from 'react-router-dom';
import './index.scss';
import React, { useState, useCallback, stopPropagation } from 'react';
const Columns = {
    default: 4,
    1500: 3,
    1200: 2,
    900: 1
};

const Home = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [viewerOpen, setViewerOpen] = useState(false);

    const openViewer = useCallback((photo) => {
        setCurrentImg(photo);
        setViewerOpen(true);
        // console.log(`test ${photo.id}`);
    });

    const closeViewer = () => {
        setCurrentImg(0);
        setViewerOpen(false);
        console.log('closed');
    };

    const stopChildClick = (e) => {
        e.stopImmediatePropagation();
        console.log('stop');
    };

    return (
        <div className="container">
            {viewerOpen ?
                <div className='image-viewer-background' onClick={closeViewer}>
                    <div className='image-viewer' onClick={() => console.log('help')}>
                        <h1>TEST</h1>
                        {currentImg}
                    </div>
                </div>
                :
                <div className="home-page">
                    <Masonry breakpointCols={Columns} className="masonry-grid" columnClassName='masonry-grid_column'>
                        {Photos.map(({ id, src, alt }) => {
                            return (
                                <div key={id} className="masonry-grid-column">
                                    <img src={src} alt={alt} onClick={openViewer} width="90%" />
                                </div>
                            );
                        })}
                    </Masonry>
                </div>}
        </div>
    );
}

export default Home