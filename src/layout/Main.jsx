import React from 'react';
import Home from '../page/Home/Home/Home';
import Navbar from '../page/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../page/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;