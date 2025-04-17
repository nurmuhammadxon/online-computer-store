import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Comment.css'
import Btn from '../ButtonComponent'

function Commets() {

    const commetnList = [
        {
            id: 1,
            author: 'Tama Brown',
            comment: 'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.'
        },
        {
            id: 2,
            author: 'Tama Brown',
            comment: 'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.'
        },
        {
            id: 3,
            author: 'Tama Brown',
            comment: 'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.'
        },
        {
            id: 4,
            author: 'Tama Brown',
            comment: 'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.'
        },
    ]

    return (
        <div>
            <div className='max-w-[1160px] w-full mx-auto bg-[#F5F7FF] py-11'>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    className='max-w-[922px] mx-auto'
                >
                    {
                        commetnList.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className='flex items-start gap-6'>
                                        <h1 className='text-8xl'>"</h1>
                                        <p className='font-normal text-lg text-justify'>{item.comment}</p>
                                    </div>
                                    <div className='w-full flex justify-end mt-2'>
                                        <p className='font-normal text-sm'>
                                            -{item.author}
                                        </p>
                                    </div>
                                    <div className='w-full mt-5'>
                                        <Btn
                                            title='Leave Us A Review'
                                            BorderColor='#0156FF'
                                            TextColor='#0156FF'
                                            BgColor='#F5F7FF'
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Commets