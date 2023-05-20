import React, { useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Swal from 'sweetalert2';
import Rating from '@mui/material/Rating';
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
        <div  data-aos="zoom-in" className='shadow-lg flex flex-col'>
            <img className='w-80 h-80 m-auto' src={img} alt='' />
            <div className='p-5 space-y-2 flex-grow'>
                <h1 className='text-3xl font-bold'>{name}</h1>
                <p className='font-semibold'>Price: ${price}</p>
                <p className='flex gap-2 items-center'><Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />  <span>{rating}</span></p>
            </div>
            <div className='p-3'>
                <button onClick={handleViewDetails} className='btn bg-pink-600 w-full'>View Details</button>
            </div>
        </div>

    );
};

export default CategoryDoll;