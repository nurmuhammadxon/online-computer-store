import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TiDeleteOutline } from 'react-icons/ti';
import { GoPencil } from 'react-icons/go';

import { AllRemoveFromCart, removeFromCart } from '../store/counterSlice';
import ButtonComponent from '../components/ButtonComponent';
import DiscountLink from '../components/home/DiscountLink';
import paypal from '../assets/Paypal mycart icons.svg';

function ShoppingCart() {
    const data = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const [isShoping, setIsShoping] = useState(false);
    const [isDiscountCode, setIsDiscountCode] = useState(false);
    const navigate = useNavigate()

    const [quantities, setQuantities] = useState(() =>
        data.reduce((acc, item) => {
            acc[item.id] = item.quantity || 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (id, value) => {
        const updatedQty = Math.max(1, Number(value));
        setQuantities(prev => ({
            ...prev,
            [id]: updatedQty
        }));
    };

    const subtotal = (price, quantity) => {
        return (parseFloat(price) * parseInt(quantity)).toLocaleString(undefined, { minimumFractionDigits: 2 });
    };

    const getTotalPrice = () => {
        return data.reduce((total, item) => {
            return total + parseFloat(item.price) * quantities[item.id];
        }, 0).toLocaleString(undefined, { minimumFractionDigits: 2 });
    };

    const getOrderTotal = () => {
        const totalPrice = getTotalPrice();
        const total = parseFloat(totalPrice.replace(',', '')) + 21;
        return total.toLocaleString(undefined, { minimumFractionDigits: 2 });
    };

    const handleRemoveFromCart = () => {
        dispatch(AllRemoveFromCart());
    };



    return (
        <div className='py-5'>

            <div className='py-5 flex'>
                <div className='w-2/3 pr-11'>
                    <h1 className='font-semibold text-4xl'>Shopping Cart</h1>
                    <div>
                        <div className='flex items-center justify-between pb-3 pt-7'>
                            <p className='font-semibold text-sm'>Item</p>
                            <div className='w-1/2 flex items-center justify-between pl-2.5 pr-10'>
                                <p className='font-semibold text-sm'>Price</p>
                                <p className='font-semibold text-sm'>Qty</p>
                                <p className='font-semibold text-sm'>Subtotal</p>
                                <p></p>
                            </div>
                        </div>
                        {
                            data.map((item, index) => (
                                <div
                                    key={index}
                                    className='py-6 w-full border-t border-t-[#CACDD8] flex items-start justify-between'
                                >
                                    <div className='flex items-start gap-7 w-1/2'>
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                                        <p className='font-normal text-sm'>
                                            {item.aboutProduct}
                                        </p>
                                    </div>
                                    <div className='w-1/2 flex items-center justify-between pl-7'>
                                        <p className='font-semibold text-base'>
                                            ${item.price}.00
                                        </p>
                                        <input
                                            type="number"
                                            value={quantities[item.id]}
                                            min={1}
                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                            className='w-[70px] h-[50px] bg-[#F5F7FF] rounded-md font-semibold text-sm p-3 outline-none'
                                        />
                                        <p className='font-semibold'>
                                            ${subtotal(item.price, quantities[item.id])}
                                        </p>
                                        <div className='flex flex-col items-center gap-2'>
                                            <button
                                                className='text-[#A2A6B0] text-3xl cursor-pointer'
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                            >
                                                <TiDeleteOutline />
                                            </button>
                                            <button
                                                className='size-6 border-2 border-[#A2A6B0] rounded-full text-[#A2A6B0] text-sm flex items-center justify-center cursor-pointer'
                                            >
                                                <GoPencil />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className='mt-5 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <ButtonComponent
                                title='Continue Shopping'
                                TextColor='#A2A6B0'
                                BorderColor='#A2A6B0'
                                paddingY='4px'
                                onClick={() => navigate('/cart/checkout')}
                            />
                            <ButtonComponent
                                title='Clear Shopping Cart'
                                TextColor='#ffffff'
                                BgColor='#000000'
                                paddingY='4px'
                                border='none'
                                onClick={handleRemoveFromCart}
                            />
                        </div>
                        <ButtonComponent
                            title='Update Shopping Cart'
                            TextColor='#ffffff'
                            BgColor='#000000'
                            paddingY='4px'
                            border='none'
                        />
                    </div>
                </div>
                <div className='w-1/3 bg-[#F5F7FF] py-4 px-7 mt-7'>
                    <h2 className='font-semibold text-2xl'>Summary</h2>
                    <div className='mt-5'>
                        <button
                            className='w-full flex items-center justify-between cursor-pointer font-normal text-lg'
                            onClick={() => setIsShoping(!isShoping)}
                        >
                            Estimate Shipping and Tax
                            <span className='text-xs'>
                                {isShoping ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </button>
                        <p className='mt-3 font-normal text-sm text-[#666666]'>
                            Enter your destination to get a shipping estimate.
                        </p>
                        {
                            isShoping ?
                                <div className='mt-3'>
                                    <form className='flex flex-col gap-2.5'>
                                        <label className='max-w-[450px] w-full flex flex-col gap-2.5'>
                                            <span className='font-semibold text-sm'>
                                                Country
                                            </span>
                                            <select className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm bg-white'>
                                                <option value="uzbekistan">Uzbekistan</option>
                                                <option value="kazakistan">Kazakistan</option>
                                                <option value="kirgizistan">Kirgizistan</option>
                                                <option value="turkmanistan">Turkmanistan</option>
                                                <option value="tajikistan">Tajikistan</option>
                                            </select>
                                        </label>
                                        <label className='max-w-[450px] w-full flex flex-col gap-2.5'>
                                            <span className='font-semibold text-sm'>
                                                State/Province
                                            </span>
                                            <input
                                                type="text"
                                                className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm bg-white'
                                            />
                                        </label>
                                        <label className='max-w-[450px] w-full flex flex-col gap-2.5'>
                                            <span className='font-semibold text-sm'>
                                                Zip/Postal Code
                                            </span>
                                            <input
                                                type="text"
                                                className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm bg-white'
                                            />
                                        </label>
                                        <div className='flex flex-col gap-4 mt-6'>
                                            <div className='flex flex-col items-start gap-3'>
                                                <span className='font-semibold text-sm'>Standard Rate</span>
                                                <label htmlFor="standard" className='flex gap-2 items-start cursor-pointer'>
                                                    <input type="radio" name="shipping" id="standard" className="mt-1 size-5" />
                                                    <span className='font-normal text-sm'>
                                                        Price may vary depending on the item/destination. Shop Staff will contact you. <strong>$21.00</strong>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className='flex flex-col items-start gap-3'>
                                                <span className='font-semibold text-sm'>Pickup from store</span>
                                                <label htmlFor="pickup" className='flex gap-2 items-start cursor-pointer'>
                                                    <input type="radio" name="shipping" id="pickup" className="mt-1 size-5" />
                                                    <span className='font-normal text-sm'>
                                                        1234 Street Address, City Address, 1234 $0.00
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                : ''
                        }
                    </div>
                    <div className='mt-5'>
                        <button
                            className='w-full flex items-center justify-between cursor-pointer font-normal text-lg'
                            onClick={() => setIsDiscountCode(!isDiscountCode)}
                        >
                            Enter Discount Code
                            <span className='text-xs'>
                                {isDiscountCode ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </button>
                        {
                            isDiscountCode ?
                                <div className='mt-3'>
                                    <form className='flex flex-col gap-5'>
                                        <label className='max-w-[450px] w-full flex flex-col gap-2.5'>
                                            <span className='font-semibold text-sm'>
                                                Enter discount code
                                            </span>
                                            <input
                                                type="text"
                                                placeholder='Enter Discount code'
                                                className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm bg-white'
                                            />
                                        </label>
                                        <ButtonComponent
                                            title='Apply Discount'
                                            BorderColor='#0156FF'
                                            TextColor='#0156FF'
                                            BgColor='inherit'
                                            paddingY='10px'
                                        />
                                    </form>
                                </div>
                                : ''
                        }
                    </div>
                    <div className='border-t border-t-[#CACDD8] mt-7 py-2.5'>
                        <div className='flex items-center justify-between'>
                            <span className='font-semibold text-sm'>Subtotal</span>
                            <span className='font-semibold text-sm'>
                                ${getTotalPrice()}
                            </span>
                        </div>
                        <div className='flex items-center justify-between mt-2.5'>
                            <span className='font-semibold text-sm flex flex-col pr-20'>
                                Shipping
                                <small className='font-normal text-[10px] text-[#A2A6B0]'>(Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you.)</small>

                            </span>
                            <span className='font-semibold text-sm'>$21.00</span>
                        </div>
                        <div className='flex items-center justify-between mt-2.5'>
                            <span className='font-semibold text-sm'>Tax</span>
                            <span className='font-semibold text-sm'>$1.91</span>
                        </div>
                        <div className='flex items-center justify-between mt-2.5'>
                            <span className='font-semibold text-sm'>GST (10%)</span>
                            <span className='font-semibold text-sm'>$1.91</span>
                        </div>
                        <div className='flex items-center justify-between mt-2.5'>
                            <span className='font-semibold text-sm'>Order Total</span>
                            <span className='font-semibold text-sm'>
                                ${getOrderTotal()}
                            </span>
                        </div>
                        <div className='flex flex-col gap-3.5 mt-2.5'>
                            <ButtonComponent
                                title='Proceed to Checkout'
                                BgColor='#0156FF'
                                TextColor='#ffffff'
                                paddingY='10px'
                                paddingX='130px'
                            />
                            <button
                                className='flex items-center justify-center gap-2.5 py-2.5 px-28 bg-[#FFB800] font-semibold text-sm rounded-[50px] mt-2 cursor-pointer'
                                onClick={() => navigate('/paypal')}
                            >
                                <span>Check out with</span>
                                <img src={paypal} alt="paypal" />
                            </button>
                            <ButtonComponent
                                title='Check Out with Multiple Addresses'
                                TextColor='#666666'
                                BorderColor='#666666'
                                paddingY='10px'
                                paddingX='80px'
                            />
                        </div>
                        <DiscountLink
                            maxWidth='400px'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
