import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import About from '../About/About';
import TabSection from '../TabSection/TabSection';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <About></About>    
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;