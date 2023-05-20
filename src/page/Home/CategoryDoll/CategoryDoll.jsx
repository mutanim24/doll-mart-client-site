import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const CategoryDoll = ({ doll }) => {
    const { user } = useContext(AuthContext)
    const { _id, img, name, price, rating } = doll;
    const navigate = useNavigate()

    const handleViewDetails = () => {
        if (user) {
            navigate(`/products/${_id}`)
        }
        else {
            Swal.fire('You have to log in first to view details');
            navigate(`/products/${_id}`)
        }
    }
    return (
        <div className='shadow-lg flex flex-col'>
            <img className='w-80 h-80 m-auto' src={img} alt='' />
            <div className='p-5 space-y-2 flex-grow'>
                <h1 className='text-3xl font-bold'>{name}</h1>
                <p className='font-semibold'>Price: ${price}</p>
                <p>Rating: {rating}</p>
            </div>
            <div className='p-3'>
                <button onClick={handleViewDetails} className='btn bg-pink-600 w-full'>View Details</button>
            </div>
        </div>

    );
};

export default CategoryDoll;