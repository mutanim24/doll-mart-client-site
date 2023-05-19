import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import banner from '../../../assets/doll-banner.jpg'
import fashion from '../../../assets/fashion-fun.jpg'
import doll1 from '../../../assets/doll-1.jpg'
import doll2 from '../../../assets/doll-2.jpg'
import doll3 from '../../../assets/doll-3.jpg'
import doll4 from '../../../assets/doll-4.jpg'
import doll5 from '../../../assets/doll-5.jpg'
import doll6 from '../../../assets/doll-6.jpg'
import doll7 from '../../../assets/doll-7.jpg'
import doll8 from '../../../assets/fashion-fun.jpg'
import CategoryDoll from '../CategoryDoll/CategoryDoll';

const Home = () => {
    const [dolls, setDolls] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabSelect = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setDolls(data)
            })
    }, [])

    const renderCategoryData = (category) => {
        if (category === "All") {
            return (
                <div className='grid grid-cols-3 gap-7 mt-9'>
                    {dolls.slice(0, 10).map((doll) => <CategoryDoll key={doll._id} doll={doll}></CategoryDoll>)}
                </div>
            )
        }
        return (
            <div className='grid grid-cols-3 gap-7 mt-9'>
                {dolls
                    .filter((doll) => doll.category === category)
                    .map((doll) => <CategoryDoll key={doll._id} doll={doll}></CategoryDoll>)}
            </div>
        );
    };

    return (
        <div>
            <div className="banner relative">
                <div style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '550px'
                }}>

                </div>
                <div className="banner-content py-16 md:py-0 absolute top-0 bg-black h-[550px] bg-opacity-40 md:flex w-full md:px-14">
                    <div className='md:w-8/12 mx-auto text-white my-auto text-center text-center'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-4'><span className='text-pink-600'>DollMart</span>, Where Doll Dreams Come True</h1>
                        <p>Discover a Magical Collection of Dolls and Accessories</p>
                        <div className='my-8'>
                            <button className="btn bg-pink-600 mx-3">Dolls For Girls</button>
                            <button className="btn bg-pink-600 mx-3">Dolls For Boys</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:px-14 my-16'>
                <div className='text-center mb-6'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>Dolls Gallery</h1>
                    <p className='text-sm md:text-base'> A Captivating Showcase of Exquisite Dolls</p>
                </div>
                <div className='grid grid-cols-4 p-8 border-dotted rounded border-pink-500 border-8'>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={doll1} alt="dolls" /></figure>
                    </div>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={doll2} alt="dolls" /></figure>
                    </div>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={doll3} alt="dolls" /></figure>
                    </div>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={doll4} alt="dolls" /></figure>
                    </div>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={doll5} alt="dolls" /></figure>
                    </div>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={doll6} alt="dolls" /></figure>
                    </div>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={doll7} alt="dolls" /></figure>
                    </div>
                    <div className="shadow-xl">
                        <figure><img className='hover:animate-ping border-pink-600' src={fashion} alt="dolls" /></figure>
                    </div>

                </div>
            </div>

            <div className='my-16 px-14'>
                <div className='text-center mb-6'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>New Arrivals</h1>
                    <p className='text-sm md:text-base'>Be the first to own the latest and trendiest dolls in the market.</p>
                </div>
                <Tabs selectedIndex={activeTab} onSelect={handleTabSelect} className="space-y-4">
                    <TabList className="flex space-x-4">
                        <Tab className={`${activeTab === 0 ? 'bg-pink-500' : 'bg-pink-200'} px-4 py-2 rounded-md cursor-pointer`}
                        >All</Tab>
                        <Tab className={`${activeTab === 1 ? 'bg-pink-500' : 'bg-pink-200'} px-4 py-2 rounded-md cursor-pointer`}
                        >Fashion Dolls</Tab>
                        <Tab className={`${activeTab === 2 ? 'bg-pink-500' : 'bg-pink-200'} px-4 py-2 rounded-md cursor-pointer`}>Baby Dolls</Tab>
                        <Tab className={`${activeTab === 3 ? 'bg-pink-500' : 'bg-pink-200'} px-4 py-2 rounded-md cursor-pointer`}>Princess Dolls</Tab>
                        <Tab className={`${activeTab === 4 ? 'bg-pink-500' : 'bg-pink-200'} px-4 py-2 rounded-md cursor-pointer`}>Action Figures</Tab>
                    </TabList>

                    <TabPanel>{renderCategoryData('All')}</TabPanel>
                    <TabPanel>{renderCategoryData('Fashion Dolls')}</TabPanel>
                    <TabPanel>{renderCategoryData('Baby Dolls')}</TabPanel>
                    <TabPanel>{renderCategoryData('Princess Dolls')}</TabPanel>
                    <TabPanel>{renderCategoryData('Action Figures')}</TabPanel>
                </Tabs>

            </div>

        </div>
    );
};

export default Home;