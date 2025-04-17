import React from 'react'

import news1 from '../../assets/news1.png'
import news2 from '../../assets/news2.png'
import news3 from '../../assets/news3.png'
import news4 from '../../assets/news4.png'
import news5 from '../../assets/news5.png'
import news6 from '../../assets/news6.png'
import news7 from '../../assets/news7.png'
import news8 from '../../assets/news8.png'

function News() {

    const newsList = [
        {
            image: news1,
            imageAlt: 'If you’ve',
            disc: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '01.09.2020'
        },
        {
            image: news2,
            imageAlt: 'If you’ve',
            disc: 'As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...',
            date: '01.09.2020'
        },
        {
            image: news3,
            imageAlt: 'If you’ve',
            disc: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '01.09.2020'
        },
        {
            image: news4,
            imageAlt: 'If you’ve',
            disc: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '01.09.2020'
        },
        {
            image: news5,
            imageAlt: 'If you’ve',
            disc: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '01.09.2020'
        },
        {
            image: news6,
            imageAlt: 'If you’ve',
            disc: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '01.09.2020'
        },
        {
            image: news7,
            imageAlt: 'If you’ve',
            disc: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '01.09.2020'
        },
        {
            image: news8,
            imageAlt: 'If you’ve',
            disc: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '01.09.2020'
        },
    ]

    return (
        <div className='w-full py-10'>
            <h1 className='font-semibold text-[22px]'>Follow us on Instagram for News, Offers & More</h1>
            <div className='mt-5 flex items-center gap-2.5 flex-wrap'>
                {
                    newsList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='w-[225px] cursor-pointer hover:shadow-md rounded-md transition-all duration-300'
                            >
                                <img src={item.image} alt={item.imageAlt} className='rounded-t-md' />
                                <span className='inline-block py-1.5 px-7 text-center'>
                                    <p className='font-normal text-xs leading-6'>
                                        {item.disc}
                                    </p>
                                    <p className='mt-2.5 font-normal text-[10px] text-[#A2A6B0]'>
                                        {item.date}
                                    </p>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News