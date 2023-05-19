import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDoll = ({ doll }) => {
    const {_id, img, name, price, rating } = doll;
    // console.log(doll)
    return (
        <div className='shadow-lg flex flex-col'>
            <img className='w-80 h-80 m-auto' src={img} alt='' />
            <div className='p-5 space-y-2 flex-grow'>
                <h1 className='text-3xl font-bold'>{name}</h1>
                <p className='font-semibold'>Price: ${price}</p>
                <p>{rating}</p>
            </div>
            <div className='p-3'>
                <button className='btn bg-pink-600 w-full'>
                    <Link to={`/products/${_id}`}>View Details</Link>
                </button>
            </div>
        </div>

    );
};

export default CategoryDoll;