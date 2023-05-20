import React from 'react';
import fashion from '../../../assets/fashion-fun.jpg';
import doll1 from '../../../assets/doll-1.jpg';
import doll2 from '../../../assets/doll-2.jpg';
import doll3 from '../../../assets/doll-3.jpg';
import doll4 from '../../../assets/doll-4.jpg';
import doll5 from '../../../assets/doll-5.jpg';
import doll6 from '../../../assets/doll-6.jpg';
import doll7 from '../../../assets/doll-7.jpg';

const Gallery = () => {
    return (
        <div className='md:px-14 my-16'>
            <div className='text-center mb-6'>
                <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>Dolls Gallery</h1>
                <p className='text-sm md:text-base'> A Captivating Showcase of Exquisite Dolls</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 border-dotted rounded border-pink-500 border-8'>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={doll1} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={doll2} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={doll3} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={doll4} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={doll5} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={doll6} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={doll7} alt="dolls" /></figure>
                </div>
                <div className="shadow-xl">
                    <figure><img className='hover:animate-ping border-pink-600' src={fashion} alt="dolls" /></figure>
                </div>

            </div>
        </div>
    );
};

export default Gallery;