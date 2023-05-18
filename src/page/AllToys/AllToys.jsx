import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='px-14'>
            <div className='p-5 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-4xl font-bold text-pink-600'>All Toys</h1>
            </div>
            <div>
                {
                    products.map(product)
                }
            </div>
            
        </div>
    );
};

export default AllToys;