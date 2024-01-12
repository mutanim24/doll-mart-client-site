import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import 'aos/dist/aos.css';
import fashion from '../../../assets/fashion-fun.jpg';
import doll1 from '../../../assets/doll-1.jpg';
import doll2 from '../../../assets/doll-2.jpg';
import doll3 from '../../../assets/doll-3.jpg';
import doll4 from '../../../assets/doll-4.jpg';
import doll5 from '../../../assets/doll-5.jpg';
import doll6 from '../../../assets/doll-6.jpg';
import doll7 from '../../../assets/doll-7.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Gallery = () => {
    return (
        <div className='md:px-14 my-16'>
           <SectionTitle
            title="Dolls Gallery"
            subtitle="A Captivating Showcase of Exquisite Dolls"
           ></SectionTitle>
            <div data-aos="zoom-in" className='grid grid-cols-2 md:grid-cols-4 p-4 md:p-8 border-dotted rounded border-pink-500 border-8'>
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