import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Banner from '../Component/Banner';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;