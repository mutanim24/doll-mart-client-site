import React from 'react';

const ProductRow = ({product}) => {
    const {img, name, category, price, quantity, seller} = product
    return (
        <tr className=''>
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
                <button className="btn bg-pink-600 btn-sm">View Details</button>
            </th>
        </tr>
    );
};

export default ProductRow;