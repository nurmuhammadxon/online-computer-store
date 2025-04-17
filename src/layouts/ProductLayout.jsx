import React from 'react';
import BannerReklama from '../components/ProductLayot/BannerReklama';
import ProductTitile from '../components/ProductLayot/ProductTitile';
import { Outlet } from 'react-router-dom';
import ProductFilter from '../components/ProductLayot/ProductFilter';
import ProductFilterList from '../components/ProductLayot/ProductFilterList';

function ProductLayout() {
    return (
        <div>
            <div className='w-full'>
                <BannerReklama />
            </div>
            <div>
                <ProductTitile />
                <div className='flex items-start justify-between gap-2'>
                    <div>
                        <ProductFilter />
                    </div>
                    <div className='flex flex-col gap-3.5'>
                        <ProductFilterList />
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLayout;
