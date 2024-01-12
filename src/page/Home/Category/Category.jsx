import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-5'>
            <SectionTitle
                title="Doll Types Galore"
                subtitle="Explore Our Playful Categories and Find the Perfect Doll Match!"
            ></SectionTitle>
            <div className='px-10 grid grid-cols-3 gap-3'>
            {
                categories.map((item, index) => <CategoryCard
                    key={index}
                    category={item}
                ></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Category;