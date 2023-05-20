import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
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
            <div data-aos="zoom-in" className="banner-content py-16 md:py-0 absolute top-0 bg-black h-[550px] bg-opacity-40 md:flex w-full md:px-14">
                <div data-aos="ease-in" className='md:w-8/12 mx-auto text-white my-auto text-center text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'><span className='text-pink-600'>DollMart</span>, Where Doll Dreams Come True</h1>
                    <p>Discover a Magical Collection of Dolls and Accessories</p>
                    <div className='my-8'>
                        <button className="btn bg-pink-600 mx-3">Doll For Girls</button>
                        <button className="btn bg-pink-600 mx-3">Doll For Boys</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;