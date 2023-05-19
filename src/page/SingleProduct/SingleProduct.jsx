import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const product = useLoaderData();
    const { img, name, seller, price, rating, quantity, description } = product;
    return (
        <div>
            <div className='p-10 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-5xl font-bold text-pink-600 text-center'>Toy Details</h1>
            </div>
            <div className='p-14'>
                <div className='p-8 shadow-xl flex gap-5 rounded'>
                    <img className='w-5/12 hover:scale-110 border-8 border-double border-pink-600' src={img} alt="" />
                    <div className='w-7/12 space-y-3 relative p-3'>
                        <h1 className='font-bold text-5xl'>{name}</h1>
                        <p className='text-2xl font-semibold'>Price: ${price}</p>
                        <p>Review</p>
                        <p>{description}</p>
                        <p>Available quantity: {quantity}</p>
                        <div className='border border-2 p-5 rounded space-y-2'>
                            <h1 className='font-semibold text-2xl'>Seller Information</h1>
                            <hr />
                            <h3>Seller: {seller.name}</h3>
                            <h3>Seller Email: {seller.email}</h3>
                        </div>
                        <button className='btn bg-pink-600 w-full my-5 absolute mb-0'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;