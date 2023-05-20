import React from 'react';
import banner from '../../../assets/doll-banner.jpg';

const Banner = () => {
    return (
        <div className="banner relative">
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '550px'
            }}>

            </div>
            <div className="banner-content py-16 md:py-0 absolute top-0 bg-black h-[550px] bg-opacity-40 md:flex w-full md:px-14">
                <div className='md:w-8/12 mx-auto text-white my-auto text-center text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'><span className='text-pink-600'>DollMart</span>, Where Doll Dreams Come True</h1>
                    <p>Discover a Magical Collection of Dolls and Accessories</p>
                    <div className='my-8'>
                        <button className="btn bg-pink-600 mx-3">Dolls For Girls</button>
                        <button className="btn bg-pink-600 mx-3">Dolls For Boys</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;