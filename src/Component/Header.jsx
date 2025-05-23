import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center items-center bg-[url(more/15.jpg)] bg-cover bg-center bg-no-repeat text-base-200 pb-2'>
            <img className='w-20 h-24' src="logo1.png" alt="logo" />
            <p className='text-6xl rancho'>Espresso Emporium</p>
        </div>
    );
};

export default Header;