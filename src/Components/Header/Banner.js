import React from 'react';
import sample from '../../Video/sample.mp4';

const Banner = () => {
    return (
        <div>
            <header className="bg-white shadow">
            <video className='videoTag w-screen h-90' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            </header>
        </div>
    );
};

export default Banner;