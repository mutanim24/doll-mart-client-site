import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductRow from './ProductRow';
import { useTitle } from '../../hooks/useTitle';

const AllToys = () => {
    useTitle("All Toys")
    
    const products = useLoaderData();
    const [filteredList, setFilteredList] = new useState(products);

    const filterBySearch = (event) => {
        event.preventDefault();
        const query = event.target.search.value;
        if(!query){
            return setFilteredList(products)
        }
        // console.log(query)
        var updatedList = [...filteredList];
        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
        event.target.search.value = '';
    };
    return (
        <div>
            <div className='p-10 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-3xl md:text-5xl font-bold text-pink-600 text-center'>All Toys</h1>
            </div>
            <form onSubmit={filterBySearch} className='p-6 md:p-0 md:pl-14 md:pt-14'>
                <input type="text" placeholder="Search doll" name='search' className="input input-bordered input-error w-full max-w-xs" />
                <input className='btn bg-pink-700 mt-2 md:mt-0 md:ml-3' type="submit" value="Search" />
            </form>
            <div className='mx-auto md:my-4 p-6 md:px-14'>
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
                                filteredList.slice(0, 20).map(product => <ProductRow
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