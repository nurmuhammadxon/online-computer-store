import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { TiDeleteOutline } from "react-icons/ti";
import { GoPencil } from "react-icons/go";

import ButtonComponent from '../ButtonComponent';
import paypal from '../../assets/Paypal mycart icons.svg';
import { removeFromCart } from '../../store/counterSlice';

function MyCart({
    isShopCart = false,
    setIsShopCart
}) {
    const myData = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     setIsShopCart(false);

    // }, [location.pathname]);

    const handeleChacout = () => {
        navigate('/cart')
        setIsShopCart(false)
    }

    const subtotal = () => {
        return myData.reduce((acc, item) => acc + parseFloat(item.price), 0)
            .toLocaleString(undefined, { minimumFractionDigits: 2 });
    };

    return (
        <>
            <div className='absolute top-28 right-72 z-40 w-[310px] py-6 flex flex-col items-center justify-center gap-5 shadow-xl bg-white rounded-md'>
                <div className='flex items-center justify-center flex-col gap-1.5 relative'>
                    <h3 className='font-semibold text-lg'>My Cart</h3>
                    <p className='font-normal text-xs text-[#A2A6B0] mb-2.5'>
                        {myData.length} item{myData.length !== 1 ? 's' : ''} in cart
                    </p>
                    <ButtonComponent
                        title='View or Edit Your Cart'
                        BorderColor='#0156FF'
                        TextColor='#0156FF'
                        onClick={handeleChacout}
                    />
                    <span className='absolute -top-7 right-0 size-3 rotate-45 rounded-[2px]'></span>
                </div>

                <div className='flex flex-col gap-2 w-full max-h-[250px] overflow-y-auto px-4'>
                    {myData.map((item) => (
                        <div
                            className='flex items-center justify-between border-t border-[#CACDD8] pt-4 w-full'
                            key={item.id}
                        >
                            <span className='flex items-center gap-2'>
                                {item.quantity || 1} x
                                <img
                                    src={item.image}
                                    alt={`${item.title} image`}
                                    className='w-16 h-16 object-contain'
                                />
                            </span>
                            <span className='line-clamp-2 w-[150px] text-sm'>
                                {item.aboutProduct}
                            </span>
                            <span className='flex flex-col items-center justify-center gap-1'>
                                <button
                                    className='text-[#A2A6B0] text-xl cursor-pointer'
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    <TiDeleteOutline />
                                </button>
                                <button
                                    className='size-4 border-2 border-[#A2A6B0] rounded-full text-[#A2A6B0] text-[10px] flex items-center justify-center cursor-pointer'
                                >
                                    <GoPencil />
                                </button>
                            </span>
                        </div>
                    ))}
                </div>

                <div className='w-full border-t border-[#CACDD8] pt-4 px-4 flex flex-col items-center justify-center'>
                    <p className='font-semibold text-sm text-text-muted mb-3'>
                        Subtotal: <span className='text-lg text-black'>${subtotal()}</span>
                    </p>
                    <ButtonComponent
                        title='Go to Checkout'
                        BgColor='#0156FF'
                        TextColor='#fff'
                        paddingX='70px'
                        onClick={() => navigate('/checkout')}
                    />
                    <button
                        className='flex items-center justify-center gap-2.5 py-2.5 px-8 bg-[#FFB800] font-semibold text-sm rounded-[50px] mt-2 cursor-pointer'
                        onClick={() => navigate('/paypal')}
                    >
                        <span>Check out with</span>
                        <img src={paypal} alt='paypal icon' />
                    </button>
                </div>
            </div>
            {/* modal */}
            <div
                className='absolute w-screen h-screen top-0 left-0 cursor-pointer bg-[#00000080]'
                onClick={() => setIsShopCart(false)}
            ></div>
        </>
    );
}

export default MyCart;