import React, { useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import productData from '../LaptopsData';
import ButtonComponent from '../components/ButtonComponent';
import { useSelector } from 'react-redux';
import ProductCardWithMenu from '../components/ProductCard/ProductCardWithMenu';

function Products() {
    const [loreMore, setLoreMore] = useState(20);
    const [loreMoreWidth, setLoreMoreWidth] = useState(5)
    const isMenuType = useSelector(state => state.menu.isMenuType)

    return (
        <>
            {
                isMenuType ?
                    <div className='w-full grid grid-cols-5'>
                        {productData.slice(0, loreMore).map((item, index) => (
                            <ProductCard data={item} key={index} />
                        ))}
                    </div>
                    : <div className='w-full'>
                        {productData.slice(0, loreMoreWidth).map((item, index) => (
                            <ProductCardWithMenu data={item} key={index} />
                        ))}
                    </div>
            }
            <div className='w-full flex items-center justify-center mx-auto my-4'>
                {
                    isMenuType ? loreMore < productData.length
                        : loreMoreWidth < productData.length
                        && (
                            <ButtonComponent
                                border={2}
                                title='More'
                                BorderColor='#A2A6B0'
                                TextColor='#A2A6B0'
                                onClick={() => {
                                    isMenuType ? setLoreMore(prev => prev + 5)
                                        : setLoreMoreWidth(prev => prev + 3)
                                }}
                            />
                        )}
            </div>
        </>
    );
}

export default Products;