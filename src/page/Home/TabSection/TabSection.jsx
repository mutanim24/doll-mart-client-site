import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryDoll from '../CategoryDoll/CategoryDoll';

const TabSection = () => {

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
                <div className='grid md:grid-cols-3 gap-7 mt-9'>
                    {dolls.slice(0, 6).map((doll) => <CategoryDoll
                        key={doll._id}
                        doll={doll}>

                    </CategoryDoll>)}
                </div>
            )
        }
        return (
            <div className='grid md:grid-cols-3 gap-7 mt-9'>
                {dolls
                    .filter((doll) => doll.category === category)
                    .map((doll) => <CategoryDoll
                        key={doll._id}
                        doll={doll}>

                    </CategoryDoll>)}
            </div>
        );
    };

    return (
        <div className='my-16 px-6 md:px-14'>
            <div className='text-center mb-6'>
                <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>New Arrivals</h1>
                <p className='text-sm md:text-base'>Be the first to own the latest and trendiest dolls in the market.</p>
            </div>
            <Tabs selectedIndex={activeTab} onSelect={handleTabSelect} className="space-y-4">
                <TabList className="md:flex space-y-1 md:space-y-0 md:space-x-2 font-semibold md:space-x-4">
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
    );
};

export default TabSection;