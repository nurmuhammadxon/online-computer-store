import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './SwiperSlider.css'

import bannerImage from '../../assets/banner_image_1.png';

const bannerList = [
    {
        id: 1,
        image: bannerImage,
        imageAlt: 'Banner Image 1'
    },
    {
        id: 2,
        image: bannerImage,
        imageAlt: 'Banner Image 2'
    },
    {
        id: 3,
        image: bannerImage,
        imageAlt: 'Banner Image 3'
    },
];

function SwiperSlider() {
    return (
        <div className="w-full mx-auto">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                className="overflow-hidden"
            >
                {bannerList.map(item => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt={item.imageAlt}
                            className="w-full h-[400px] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;