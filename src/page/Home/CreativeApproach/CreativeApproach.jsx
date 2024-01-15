import React from 'react';
import kids1 from "../../../assets/kids-1.jpg"
import kids2 from "../../../assets/kids-2.jpg"

const CreativeApproach = () => {
    return (
        <div className='md:flex flex-row px-10 py-16'>
            <div className='md:w-6/12 md:px-16'>
                <img data-aos="zoom-in" className='rounded' src={kids1} alt="" />
            </div>
            <div className='md:w-6/12'>
                <div data-aos="fade-left" className='my-8 md:my-0 md:mb-16'>
                    <h3 className='text-2xl font-semibold'>CREATIVE APPROACH</h3>
                    <h1 className='text-5xl md:text-[60px] font-bold '>We help you take care of the kids</h1>
                    <p>ddNot only do we offer an enchanting array of toys, but we are also deeply committed to ensuring the utmost safety for your children as they play, learn, and immerse themselves in pure joy! Not only do we offer an enchanting array of toys, but we are also deeply committed to ensuring the utmost safety for your children as they play, learn, and immerse themselves in pure joy! Dive into a world of endless possibilities with our meticulously curated selection, dedicated to sparking their imagination and nurturing their well-being.</p>
                </div>
                <img data-aos="zoom-in" className='rounded' src={kids2} alt="" />
            </div>
        </div>
    );
};

export default CreativeApproach;