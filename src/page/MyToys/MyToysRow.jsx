import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ toy, handleDelete }) => {
    const { _id, img, name, category, price, quantity, seller } = toy;
    

    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-sm w-32 h-32">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">Category: {category}</div>
                    </div>
                </div>
            </td>
            <td>
                Seller: {seller.name}
                <br />
                <span className="badge badge-ghost badge-sm">Available quantity: {quantity}</span>
            </td>
            <td>$ {price}</td>
            <th>
                <Link to={`/products/${_id}`} className="btn bg-pink-600 btn-sm">View Details</Link>
            </th>
            <th>
                <Link to={`/update/${_id}`} className="btn bg-pink-600 btn-sm">Update</Link>
            </th>
        </tr>
    );
};

export default MyToysRow;