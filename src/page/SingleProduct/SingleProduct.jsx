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
            <div class='p-10 bg-pink-100 rounded shadow-xl'>
                <h1 class='text-5xl font-bold text-pink-600 text-center'>Toy Details</h1>
            </div>
            <div class='p-14'>
                <div class='p-8 shadow-2xl flex gap-5 rounded'>
                    <img class='w-5/12 h-[500px] hover:scale-110 border-8 border-double border-pink-600' src={img} alt="" />
                    <div class='w-7/12 space-y-3 relative p-3'>
                        <h1 class='font-bold text-5xl'>{name}</h1>
                        <p class='text-2xl font-semibold'>Price: ${price}</p>
                        <p className='flex gap-2 items-center'><Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly /> {rating}</p>
                        <p>{description}</p>
                        <p className='font-semibold'>Available quantity: {quantity}</p>
                        <div class='border border-2 p-5 rounded space-y-2'>
                            <h1 class='font-semibold text-2xl'>Seller Information</h1>
                            <hr />
                            <h3>Seller: {seller.name}</h3>
                            <h3>Seller Email: {seller.email}</h3>
                        </div>
                        <button class='btn bg-pink-600 w-full absolute mb-0 bottom-0'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleProduct;