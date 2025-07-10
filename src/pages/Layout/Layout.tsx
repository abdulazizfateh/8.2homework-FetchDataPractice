import React from 'react'
import Header from '../../components/Header.tsx/Header';
import Footer from '../../components/Footer.tsx/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main className='site_main min-h-[90vh] pt-3.5 pb-20'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default React.memo(Layout);