import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductRow from './ProductRow';

const AllToys = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='px-14'>
            <div className='p-5 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-4xl font-bold text-pink-600'>All Toys</h1>
            </div>
            <div className='mx-auto my-8'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            products.slice(0, 20).map(product => <ProductRow
                                key={product._id}
                                product={product}
                            ></ProductRow>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllToys;