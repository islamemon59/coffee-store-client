import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;