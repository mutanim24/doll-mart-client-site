import React from 'react';
import magicDoll from "../../../assets/magic doll.png"

const DollMartMagic = () => {
    return (
        <div className='md:flex flex-row items-center bg-pink-700 py-7'>
            <div data-aos="fade-right" className='md:w-6/12 text-white m-8'>
                <h4>Where Every Doll Finds a Home</h4>
                <h1 className='text-5xl md:text-[50px] font-bold my mt-2 mb-4'>Doll Mart Magic</h1>
                <p>At Doll Mart, the magic is in every moment and every doll. We're not just an online store; we're your enchanting destination for all things dolls. What sets Doll Mart apart? It's the curated collections that spark imagination, the quality that stands the test of playtime, and the joy that arrives with every package.</p>

            </div>
            <div data-aos="fade-left" className='md:w-6/12'>
                <img src={magicDoll} alt="" />
            </div>
        </div>
    );
};

export default DollMartMagic;