import React from 'react';
import about1 from '../../../assets/about-1.jpg';


const Testimonial = () => {
    return (
        <div className='my-8 p-4 md:p-14 bg-pink-700 md:flex gap-5 items-center'>
            <div className='md:w-4/12 text-center md:text-left text-white space-y-3'>
                <h4 className='font-semibold'>Testimonial</h4>
                <h1 className='text-3xl md:text-5xl font-bold'>What Our Client Says About Us</h1>
                <button className='btn bg-white text-pink-600 hover:bg-pink-800 hover:text-white rounded-full px-8'>About Us</button>
            </div>
            <div className='grid md:grid-cols-2 gap-8 md:w-8/12'>
                <div className='rounded-2xl shadow-xl p-12 bg-white'>
                    <h1 className='text-6xl'>❝</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati magnam odio ad numquam modi.</p>
                    <div className='flex items-center justify-center gap-3 mt-4'>
                        <img className='rounded-full w-16 h-16' src={about1} alt="" />
                        <div>
                            <h4 className='font-bold'>Tanjil Rahat</h4>
                            <p>CEO, Tanjil tech</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl shadow-xl p-12 bg-white md:mt-6'>
                    <h1 className='text-6xl'>❝</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati magnam odio ad numquam modi.</p>
                    <div className='flex items-center justify-center gap-3 mt-4'>
                        <img className='rounded-full w-16 h-16' src={about1} alt="" />
                        <div className='mt-4'>
                            <h4 className='font-bold'>Tanjil Rahat</h4>
                            <p>CEO, Tanjil tech</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;