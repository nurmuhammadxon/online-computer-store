import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent';
import paypal from '../../assets/Paypal mycart icons.svg';
import { addTOCart } from '../../store/counterSlice';
import data from '../../LaptopsData';

function ProductAboutHeader() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = data.find(item => item.id === Number(id));
    const [inputValue, setInputValue] = useState(1);

    const productAboutHeaderList = [
        { id: 1, title: 'About Product', link: `/productabout/${id}/about` },
        { id: 2, title: 'Details', link: `/productabout/${id}/details` },
        { id: 3, title: 'Specs', link: `/productabout/${id}/specs` }
    ];

    const subtotal = () => {
        const price = parseFloat(product?.price || 0);
        const quantity = parseInt(inputValue || 0);
        return (price * quantity).toLocaleString(undefined, { minimumFractionDigits: 2 });
    };

    const addToCart = () => {
        for (let i = 0; i < inputValue; i++) {
            dispatch(addTOCart(product));
        }
        setInputValue(0)
    };

    return (
        <div className='flex items-center justify-between py-10'>
            <div>
                <ul className='flex items-center gap-7'>
                    {productAboutHeaderList.map(item => (
                        <li key={item.id}>
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    `font-semibold text-sm text-[#666666] ${isActive ? 'text-black underline' : ''}`
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center gap-3.5'>
                <p className='font-normal text-sm'>
                    On Sale from <span className='font-semibold'>${subtotal()}</span>
                </p>
                <input
                    type="number"
                    value={inputValue}
                    min={1}
                    onChange={(e) => {
                        const value = Math.max(1, Number(e.target.value));
                        setInputValue(value);
                    }}
                    className='w-[70px] h-[50px] bg-[#F5F7FF] rounded-md font-semibold text-sm p-3 outline-none'
                />
                <ButtonComponent
                    title='Add to Cart'
                    BgColor='#0156FF'
                    TextColor='#fff'
                    paddingX='26px'
                    onClick={addToCart}
                />
                <button
                    className='flex items-center justify-center gap-2.5 py-3 px-8 bg-[#FFB800] font-semibold text-sm rounded-[50px] cursor-pointer'
                    onClick={() => navigate('/paypal')}
                >
                    <img src={paypal} alt='paypal icon' />
                </button>
            </div>
        </div>
    );
}

export default ProductAboutHeader;
