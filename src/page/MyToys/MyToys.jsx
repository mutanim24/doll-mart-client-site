import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
    // console.log(myToys)
    return (
        <div>
            <div className='p-10 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-5xl font-bold text-pink-600 text-center'>My Toys</h1>
            </div>
            my toys
        </div>
    );
};

export default MyToys;