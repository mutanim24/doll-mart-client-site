import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <div style={{ 
            backgroundImage: `url(${category.category_img})`,
            backgroundPosition: 'right',
            backgroundSize: 'cover'
            }}>
            <div className='m-4 p-3 border-dotted border-4 border-white h-56 flex flex-col justify-end'>
                <h1 className='text-3xl font-bold'>{category.category}</h1>
                <h3>{category.brand_quality}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;