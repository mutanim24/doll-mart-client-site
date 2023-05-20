import React from 'react';
import Rating from '@mui/material/Rating';

import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const SingleProduct = () => {
    useTitle("Toy")
    const product = useLoaderData();
    const { img, name, seller, price, rating, quantity, description } = product;
    return (
        <div>
            <div className='p-10 bg-pink-100 rounded shadow-xl'>
                <h1 className='text-3xl md:text-5xl font-bold text-pink-600 text-center'>Toy Details</h1>
            </div>
            <div className='p-5 md:p-14'>
                <div className='md:p-8 shadow-2xl md:flex gap-5 rounded'>
                    <img className='md:w-5/12 md:h-[500px] hover:scale-110 border-2 md:border-8 border-double border-pink-600' src={img} alt="" />
                    <div className='md:w-7/12 space-y-3 relative p-3'>
                        <h1 className='font-bold text-3xl md:text-5xl'>{name}</h1>
                        <p className='md:text-2xl font-semibold'>Price: ${price}</p>
                        <p className='flex gap-2 items-center'><Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly /> {rating}</p>
                        <p className='text-sm md:text-base'>{description}</p>
                        <p className='font-semibold'>Available quantity: {quantity}</p>
                        <div className='border border-2 p-5 rounded space-y-2'>
                            <h1 className='font-semibold text-2xl'>Seller Information</h1>
                            <hr />
                            <h3>Seller: {seller.name}</h3>
                            <h3>Seller Email: {seller.email}</h3>
                        </div>
                        <button className='btn bg-pink-600 w-full md:absolute mb-0 bottom-0'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleProduct;