import React, { useState } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import data from '../../LaptopsData';

function ProductDetail() {
    const { id } = useParams();
    const product = data.find(item => item.id === Number(id));

    const location = useLocation();
    const pathnameArr = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = pathnameArr.map((item, index) => {
        const path = '/' + pathnameArr.slice(0, index + 1).join('/')

        return (
            <span key={index} className="text-black capitalize">
                <span className="mx-2 text-brand-primary">{'>'}</span>
                <Link to={path} className="hover:underline hover:text-brand-primary text-black font-normal text-xs">
                    {decodeURIComponent(item)}
                </Link>
            </span>
        )
    })

    return (
        <div className='w-1/2 bg-[#F5F7FF]'>
            <div className='max-w-[400px] w-full mx-auto bg-inherit py-14'>
                <div>
                    <Link to="/" className="text-black font-normal text-xs hover:underline hover:text-brand-primary">
                        Home
                    </Link>
                    {breadcrumbs}
                </div>

                <div className='mt-5 mx-auto flex flex-col items-start justify-start gap-3 '>
                    <h1 className='text-start text-3xl font-medium'>{product.name}</h1>
                    <Link to={'#'} className='text-brand-primary font-normal text-xs'>
                        Be the first to review this product
                    </Link>
                    <Outlet />
                </div>
                <div className='mt-5 flex items-center justify-between w-full'>
                    <p className='font-semibold text-xs'>
                        Have a Question? <span className='font-light underline text-brand-primary'>Contact Us</span>
                    </p>
                    <p className='font-light text-xs'>SKU D5515AI</p>
                </div>
                <button className='font-bold text-sm mt-7'>+ More information</button>
            </div>
        </div>
    );
}

export default ProductDetail