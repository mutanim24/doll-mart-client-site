import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [])
    // console.log(myToys)
    return (
        <div>
            <div className='p-10 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-5xl font-bold text-pink-600 text-center'>My Toys</h1>
            </div>
            <div className='mx-auto my-4 p-14'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        Delete
                                    </label>
                                </th>
                                <th>Products</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(toy => <MyToysRow
                                    key={toy._id}
                                    toy={toy}
                                ></MyToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;