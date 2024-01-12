import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div data-aos="zoom-in" className='text-center mb-6'>
            <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>{title}</h1>
            <p className='text-sm md:text-base'>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;