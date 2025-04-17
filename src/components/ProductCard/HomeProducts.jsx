import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../ProductCard/ProductCard'

function HomeProducts({
    titleArr = [],
    productArry = [],
    title,
    titleLink,
    titleBgImage
}) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleTitleArr = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="flex flex-col gap-5 w-full py-3.5">
            <ul className="flex items-center gap-6">
                {titleArr.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.link}
                            onClick={() => handleTitleArr(index)}
                            className={`text-base font-semibold transition ${activeIndex === index ? 'text-black' : 'text-[#838383]'
                                }`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex">
                <div
                    style={{ backgroundImage: `url(${titleBgImage})` }}
                    className="relative w-2/12 h-[350px] bg-cover bg-center flex flex-col items-center justify-center text-white overflow-hidden"
                >
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                    <h2 className="relative z-10 font-bold text-[22px] text-center leading-tight">
                        {title}
                    </h2>

                    <Link
                        to={titleLink}
                        className="z-10 underline text-[13px] absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        See All Products
                    </Link>
                </div>
                <div className="flex items-center gap-4 overflow-hidden w-10/12">
                    {productArry.slice(0, 5).map((item, index) => (
                        <ProductCard key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeProducts
