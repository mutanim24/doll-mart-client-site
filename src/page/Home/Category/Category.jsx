import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.map((item, index) => <CategoryCard
                    key={index}
                    category={item}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Category;