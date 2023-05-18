import React from 'react';
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

const Home = () => {
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
                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Fashion Dolls</Tab>
                        <Tab>Baby Dolls</Tab>
                        <Tab>Princess Dolls</Tab>
                        <Tab>Action Figures</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>All content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Fashion content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Baby content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Princess content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Action content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Home;