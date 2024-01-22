import React from 'react';

const TestimonialCard = ({item}) => {
    return (
        <div data-aos="zoom-in" className='rounded-2xl p-10 shadow-xl bg-white'>
            <h1 className='text-6xl'>❝</h1>
            <p>{item.message}</p>
            <div className='flex items-center justify-center gap-3 mt-4'>
                <img className='rounded-full w-16 h-16' src={item.image} alt="" />
                <div>
                    <h4 className='font-bold'>{item.name}</h4>
                    <p>{item.location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;