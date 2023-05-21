import React, { useContext } from 'react';
import Swal from 'sweetalert2'

import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';

const AddToy = () => {
    useTitle("Add Toy")
    const {user} = useContext(AuthContext)
    
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.photo.value;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const description = form.description.value;
        const newProduct = {img, name, category, seller: {name: sellerName, email: sellerEmail}, price, rating, quantity, description};

        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div className=''>
            <div className='p-10 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-5xl font-bold text-pink-600 text-center'>Add Toys</h1>
            </div>
            <form onSubmit={handleAddProduct} className='m-6 md:m-14 p-8 rounded shadow-lg'>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Toys Name</span>
                        </label>
                        <input required name='name' type="text" placeholder="toy name" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Toys Photo URL</span>
                        </label>
                        <input required name='photo' type="text" placeholder="toy photo URL" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Category</span>
                        </label>
                        <input required name='category' type="text" placeholder="category" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input required name='price' type="number" placeholder="price" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Available quantity</span>
                        </label>
                        <input required name='quantity' type="number" placeholder="quantity" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <input required name='rating' type="number" placeholder="rating" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Seller Name</span>
                        </label>
                        <input required defaultValue={user.displayName} name='sellerName' type="text" placeholder="seller name" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Seller email</span>
                        </label>
                        <input required defaultValue={user.email} name='sellerEmail' type="email" placeholder="email" className="input input-bordered input-secondary w-full" />
                    </div>

                </div>
                <div className="form-control my-5">
                    <label className="label">
                        <span className="label-text font-semibold">Toys description</span>
                    </label>
                    <textarea required name='description' className="textarea textarea-secondary" placeholder="description"></textarea>
                </div>
                <input type="submit" className='btn bg-pink-600 w-full' value="Add now" />
            </form>
        </div>
    );
};

export default AddToy;