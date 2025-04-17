import React from 'react'
import SwiperSlider from '../components/Sliders/SwiperSlider'
import NewProducts from '../components/home/NewProducts'
import DiscountLink from '../components/home/DiscountLink'
import PopularProducts from '../components/home/PopularProducts'
import BrandPC from '../components/home/BrandPC'
import News from '../components/home/News'
import Commets from '../components/home/Commets'

function HomePage() {
    return (
        <>
            {/* swiper  */}
            <SwiperSlider />
            {/* New products */}
            <NewProducts />
            {/* pay in installments */}
            <DiscountLink />
            {/* Popular PC  */}
            <PopularProducts />
            {/* brand PC  */}
            <BrandPC />
            {/* News */}
            <News />
            {/* comments */}
            <Commets />
        </>
    )
}

export default HomePage