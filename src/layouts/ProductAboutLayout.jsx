import React from 'react'
import ProductAboutFooter from '../components/ProductAboutLayout/ProductAboutFooter'
import ProductAboutHeader from '../components/ProductAboutLayout/ProductAboutHeader'
import { Outlet } from 'react-router-dom'
import ProductAboutAImage from '../components/ProductAboutLayout/ProductAboutAImage'

function ProductAboutLayout() {
    return (
        <div>
            <div>
                <div>
                    <ProductAboutHeader />
                </div>
                <div>
                    <div className='flex items-start'>
                        <Outlet />
                        <ProductAboutAImage />
                    </div>
                </div>
            </div>
            <div>
                <ProductAboutFooter />
            </div>
        </div>
    )
}

export default ProductAboutLayout