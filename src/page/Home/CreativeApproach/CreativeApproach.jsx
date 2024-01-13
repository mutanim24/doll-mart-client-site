import React from 'react';
import kids1 from "../../../assets/kids-1.jpg"
import kids2 from "../../../assets/kids-2.jpg"

const CreativeApproach = () => {
    return (
        <div className='flex flex-row px-10 py-16'>
            <div className='w-6/12 px-16'>
                <img className='rounded' src={kids1} alt="" />
            </div>
            <div className='w-6/12'>
                <div className='mb-28'>
                    <h3 className='text-2xl font-semibold'>CREATIVE APPROACH</h3>
                    <h1 className='text-[60px] font-bold '>We help you take care of the kids</h1>
                    <p>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun!</p>
                </div>
                <img className='rounded' src={kids2} alt="" />
            </div>
        </div>
    );
};

export default CreativeApproach;