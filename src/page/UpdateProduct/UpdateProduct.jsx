import React from 'react';
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData();
    console.log(product)
    const { _id, name, img, description, price, quantity } = product;

    const handleAddProduct = event => {

        event.preventDefault();
        const form = event.target;
        const img = form.photo.value;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedProduct = { img, name, price, quantity, description };

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className=''>
            <div className='p-10 bg-pink-100 rounded shadow-lg'>
                <h1 className='text-5xl font-bold text-pink-600 text-center'>Update Toys</h1>
            </div>
            <form onSubmit={handleAddProduct} className='m-14 p-8 rounded shadow-lg'>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Toys Name</span>
                        </label>
                        <input defaultValue={name} name='name' type="text" placeholder="toy name" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Toys Photo URL</span>
                        </label>
                        <input defaultValue={img} name='photo' type="text" placeholder="toy photo URL" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input defaultValue={price} name='price' type="number" placeholder="price" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Available quantity</span>
                        </label>
                        <input defaultValue={quantity} name='quantity' type="number" placeholder="quantity" className="input input-bordered input-secondary w-full" />
                    </div>


                </div>
                <div className="form-control my-5">
                    <label className="label">
                        <span className="label-text font-semibold">Toys description</span>
                    </label>
                    <textarea defaultValue={description} name='description' className="textarea textarea-secondary" placeholder="description"></textarea>
                </div>
                <input type="submit" className='btn bg-pink-600 w-full' value="Update now" />
            </form>
        </div>
    );
};

export default UpdateProduct;