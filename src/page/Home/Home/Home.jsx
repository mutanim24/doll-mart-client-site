import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import About from '../About/About';
import TabSection from '../TabSection/TabSection';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import { useTitle } from '../../../hooks/useTitle';
import Blogs from '../Blogs/Blogs';
import NewsLetter from '../NewsLetter/NewsLetter';
import Category from '../Category/Category';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <About></About>    
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;