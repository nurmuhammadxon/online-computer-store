import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

// components 
import Header from '../components/header/Header'
import Footer from '../components/home/Footer'

function RootLayout() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className='max-w-[1920px] w-full mx-auto font-primary relative'>
            <Header />
            <main className='max-w-[1400px] w-full mx-auto'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout