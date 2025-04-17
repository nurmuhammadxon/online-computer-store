import React from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../ProductCard/ProductCard'
import productData from '../../LaptopsData'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import '../home/Comment.css'

function NewProducts() {

    return (
        <div className='w-full py-9'>
            <div className='w-full flex items-center justify-between mb-3.5'>
                <h2 className='font-semibold text-2xl'>New Products</h2>
                <Link
                    to='products/new'
                    className='font-normal text-sm text-brand-primary underline decoration-solid'
                >
                    See All New Products
                </Link>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={6}
                navigation
            >
                {productData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default NewProducts
