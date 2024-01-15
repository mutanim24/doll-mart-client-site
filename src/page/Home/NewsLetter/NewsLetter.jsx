import React from 'react';

const NewsLetter = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 bg-pink-700 px-5 md:px-10 py-20'>
            <div data-aos="fade-right" className='text-white space-y-4 md:w-6/12'>
                    <h2 className='text-4xl font-bold'>Subscribe to our Newsletter</h2>
                    <p>Be the first to know about new products, sales and promotions.</p>
            </div>
            <div data-aos="fade-left" className='flex gap-2 md:w-6/12'>
                <input type="text" placeholder="Your email" className="input input-bordered md:w-96" />
                <button className='btn'>Subscribe!</button>
            </div>
        </div>
    );
};

export default NewsLetter;