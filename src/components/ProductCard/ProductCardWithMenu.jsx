import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addTOCart } from '../../store/counterSlice'

// icon import
import { FaStar, FaPhoneAlt, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosStats } from "react-icons/io";


function ProductCardWithMenu({ data }) {
    const [isLike, setIsLike] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const likeProducts = JSON.parse(localStorage.getItem('isLike')) || []
        setIsLike(likeProducts.includes(data.id))
    }, [])

    const handleLike = (e) => {
        e.preventDefault();
        const likeProducts = JSON.parse(localStorage.getItem('isLike')) || [];

        if (likeProducts.includes(data.id)) {
            const newLikeProducts = likeProducts.filter(i => i !== data.id);
            localStorage.setItem('isLike', JSON.stringify(newLikeProducts));
            setIsLike(false);
        } else {
            const updatedLikes = [...likeProducts, data.id];
            localStorage.setItem('isLike', JSON.stringify(updatedLikes));
            setIsLike(true);
        }
    };

    const addToCart = (e) => {
        e.preventDefault();
        dispatch(addTOCart(data));
    };

    return (
        <div
            className='w-[1166px] mb-3.5 py-9 px-7 group flex gap-2.5 items-center hover:shadow-md rounded-md relative'
            key={data.id}
        >
            <div className='flex flex-col cursor-pointer'>
                <img
                    src={data.image}
                    alt={data.title}
                    className='size-64 object-cover'
                    onClick={() => navigate(`/products/${data.id}`)}
                />
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-0.5 text-xs'>
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                                <FaStar className={i < data.star ? 'text-[#E9A426]' : 'text-[#C4C4C4]'} />
                            </span>
                        ))}
                    </div>
                    <span className='text-xs font-normal text-[#C4C4C4]'>
                        Reviews ({data.reviews})
                    </span>
                </div>
            </div>
            <div
                onClick={() => navigate(`/products/${data.id}`)}
                className='flex items-start gap-10'
            >
                <div className='w-80'>
                    <p className='font-light text-xs text-black leading-5 mt-2.5 transition-all duration-300 ease-in-out line-clamp-2'>
                        {data.name}
                    </p>
                    <p className='font-normal text-xs text-black text-justify leading-5 mt-2.5 transition-all duration-300 ease-in-out line-clamp-2'>
                        {data.aboutProduct}
                    </p>
                    <div className='flex items-center gap-2.5 w-full mt-2.5'>
                        <del className='font-normal text-text-dark'>
                            {parseFloat(data.old_price).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </del>
                        <p className='font-semibold text-lg'>
                            {parseFloat(data.price).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })}
                        </p>
                    </div>
                    <button
                        className='absolute bottom-7 py-2 px-5 flex items-center gap-2.5 border-2 border-brand-primary rounded-[50px] text-brand-primary font-semibold text-sm mt-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200  z-40 cursor-pointer'
                        onClick={addToCart}
                    >
                        <MdOutlineShoppingCart />
                        Add To Cart
                    </button>
                </div>
                <div>
                    <ul className='flex flex-col gap3.5 w-40'>

                        {
                            data.specs.map(item => {
                                return (
                                    <li className='w-full py-1.5 flex items-center justify-between hover:bg-[#F5F7FF] font-normal text-xs'>
                                        {item.title} <span className='text-[#666666]'>{item.spec}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* hover components */}
            <div className='absolute right-7 bottom-7 opacity-0 group-hover:opacity-100 transition duration-200 z-40 flex items-center gap-2'>
                <div
                    className='w-[30px] h-[30px] rounded-full border-2 border-[#A2A6B0] text-[#A2A6B0] flex items-center justify-center cursor-pointer transition-all duration-300'
                    onClick={handleLike}
                >
                    {isLike ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div
                    className='w-[30px] h-[30px] rounded-full border-2 border-[#A2A6B0] text-[#A2A6B0] flex items-center justify-center cursor-pointer transition-all duration-300'
                >
                    <IoIosStats />
                </div>
            </div>
            <div
                className={`absolute top-3.5 right-6 font-normal text-xs flex gap-2 items-center justify-center 
                    ${data.in_stock ? 'text-[#78A962]' : 'text-[#C94D3F]'}
                    `}
            >
                {data.in_stock ? (
                    <>
                        <span>
                            <FaCircleCheck />
                        </span>
                        in stock
                    </>
                )
                    : (
                        <>
                            <span
                                className='size-3.5 bg-[#C94D3F] text-white rounded-full text-[6px] flex items-center justify-center'

                            >
                                <FaPhoneAlt />
                            </span>
                            check availability
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default ProductCardWithMenu