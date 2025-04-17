import React, { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import data from '../../LaptopsData';
import { useParams } from 'react-router-dom';
import DiscountLink from '../home/DiscountLink';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoIosStats } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/pagination';

function ProductAboutAImage() {
    const { id } = useParams();
    const product = data.find(item => item.id === Number(id));

    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        setIsLike(prev => !prev);
    };

    if (!product) {
        return (
            <div className="w-1/2 p-4 text-center text-red-500">
                Mahsulot rasmlari topilmadi.
            </div>
        );
    }

    return (
        <div className="w-1/2 px-4 py-6 group">
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className='relative group'
            >
                {[...Array(4)].map((_, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <img
                            src={product.image}
                            alt={`${product.name} image ${index + 1}`}
                            className="rounded-lg object-cover size-[470px]"
                        />
                    </SwiperSlide>
                ))}
                <div className='absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition duration-200 z-40'>
                    <span
                        className='w-[30px] h-[30px] rounded-full border-2 border-[#A2A6B0] text-[#A2A6B0] flex items-center justify-center cursor-pointer transition-all duration-300'
                        onClick={handleLike}
                    >
                        {isLike ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                    </span>
                    <span
                        className='w-[30px] h-[30px] rounded-full border-2 border-[#A2A6B0] text-[#A2A6B0] flex items-center justify-center cursor-pointer transition-all duration-300 mt-1.5'
                    >
                        <IoIosStats />
                    </span>
                </div>
            </Swiper>

            <div className="mt-4">
                <DiscountLink
                    bgColor="#ffffff"
                    maxWidth="268px"
                />
            </div>
        </div>
    );
}

export default ProductAboutAImage;