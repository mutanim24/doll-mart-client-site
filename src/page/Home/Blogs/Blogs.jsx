import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='py-8'>
            <div data-aos="zoom-in" className='text-center mb-6'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>Blog</h1>
                    <p className='text-sm md:text-base'> DollMart Diaries: Where Dreams and Dolls Unite</p>
                </div>
            <div className='px-5 md:px-10 grid md:grid-cols-3 gap-4 '>
                
                {
                    blogs.slice(0, 3).map((item, index) => <div key={index} className='border shadow-lg' data-aos="zoom-in">
                        <img className='w-full h-72' src={item.image} alt="Doll" />
                        <div className='p-5'>
                            <h2 className='text-2xl font-bold'>{item.title}</h2>
                            <p className='text-gray-500 font-semibold'>{item.publish_date}</p>
                            <p className='mt-2 text-base'>{item.content.slice(0, 300)}....</p>
                            <button className='btn btn-sm mt-5 bg-pink-700'>Read More</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;