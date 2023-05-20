import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import about1 from '../../../assets/about-1.jpg';
import about2 from '../../../assets/about-2.jpg';
import about3 from '../../../assets/about-3.jpg';
import about4 from '../../../assets/about-4.jpg';

const About = () => {
    return (
        <div className='my-16 px-6 md:px-14'>
            <div data-aos="zoom-in" className='text-center mb-6'>
                <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>About Us</h1>
                <p className='text-sm md:text-base'>We make your children happier
                    with the best toys</p>
            </div>
            <div className='grid md:grid-cols-4 gap-4'>
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src={about1} alt="" />
                    <h1 className='text-2xl font-bold'>Big Selection</h1>
                    <p>The widest toy range.</p>
                </div>
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src={about2} alt="" />
                    <h1 className='text-2xl font-bold'>Online Store</h1>
                    <p>Easiest online shopping.</p>
                </div>
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src={about3} alt="" />
                    <h1 className='text-2xl font-bold'>Delivery</h1>
                    <p>Fast and easy delivery.</p>
                </div>
                <div data-aos="zoom-in" className='text-center p-10 rounded shadow-xl space-y-3'>
                    <img className='mx-auto' src={about4} alt="" />
                    <h1 className='text-2xl font-bold'>Support</h1>
                    <p>Call our awesome team.</p>
                </div>
            </div>
        </div>
    );
};

export default About;