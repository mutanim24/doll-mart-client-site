import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import member1 from '../../../assets/mamber-1.jpg';
import member2 from '../../../assets/mamber-2.jpg';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard';
// import "./Testimonial.css"


const Testimonial = () => {


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [testimonials, setTestimonial] = useState([]);
    useEffect(() => {
        fetch("testimonial.json")
        .then(res => res.json())
        .then(data => setTestimonial(data))
    }, [])

    return (
        <div className='my-8 p-4 md:p-14 bg-pink-700 md:flex gap-5 items-center'>
            <div data-aos="zoom-in" className='md:w-4/12 text-center md:text-left text-white space-y-3'>
                <h4 className='font-semibold'>Testimonial</h4>
                <h1 className='text-3xl md:text-5xl font-bold'>What Our Client Says About Us</h1>
                <button className='btn bg-white text-pink-600 hover:bg-pink-800 hover:text-white rounded-full px-8'>About Us</button>
            </div>
            <div className='md:w-8/12'>

                <Slider {...settings}>
                    {
                        testimonials.map((item, index) => <TestimonialCard
                            key={index}
                            item={item}
                        ></TestimonialCard>)
                    }
                </Slider>

                {/* <div data-aos="zoom-in" className='rounded-2xl shadow-xl p-12 bg-white'>
                        <h1 className='text-6xl'>❝</h1>
                        <p>Looking for the perfect doll to complete your collection? Look no further than DollMart! Our online shop is a doll lover's paradise, offering a wide range of exquisite dolls for every taste and preference.</p>
                        <div className='flex items-center justify-center gap-3 mt-4'>
                            <img className='rounded-full w-16 h-16' src={member2} alt="" />
                            <div>
                                <h4 className='font-bold'>Tanjil Rahat</h4>
                                <p>CEO, Tanjil tech</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='rounded-2xl shadow-xl p-12 bg-white md:mt-6'>
                        <h1 className='text-6xl'>❝</h1>
                        <p>Attention all doll enthusiasts! Discover a world of enchantment at DollMart, your ultimate destination for doll shopping. With our exclusive online shop, you can explore a treasure trove of stunning dolls that will captivate your imagination.</p>
                        <div className='flex items-center justify-center gap-3 mt-4'>
                            <img className='rounded-full w-16 h-16' src={member1} alt="" />
                            <div className='mt-4'>
                                <h4 className='font-bold'>Teagi Lawe</h4>
                                <p>jr, Lawe ltd</p>
                            </div>
                        </div>
                    </div> */}
            </div>
        </div>

    );
};

export default Testimonial;