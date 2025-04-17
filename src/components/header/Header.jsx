import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// icons
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { IoSearchSharp, IoClose, IoLocationOutline } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import { TbClockHour3 } from "react-icons/tb";

// images
import logo from '../../assets/logo.svg';
import user from '../../assets/user.png';

// components
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import MyCart from './MyCart';

// react redux
import { useSelector } from 'react-redux';
import Account from './Account';


function Header() {
    const [isSearch, setIsSearch] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isShopCart, setIsShopCart] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const navigate = useNavigate()

    const myData = useSelector(state => state.cart.value)
    const cartLength = myData.length;

    return (
        <div className='sticky top-0 left-0 z-50'>
            <div className='w-full bg-[#020202] py-3.5 px-2.5'>
                <div className='max-w-[1400px] w-full mx-auto flex items-center justify-between text-xs font-semibold text-white relative'>

                    {/* Schedule Dropdown */}
                    <div className='relative flex items-center gap-1'>
                        <span className='text-text-muted'>Mon–Thu:</span>
                        <span>9:00 AM - 5:30 PM</span>
                        <button onClick={() => setIsOpen(!isOpen)} className='text-white text-sm outline-none cursor-pointer ml-1.5'>
                            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </button>
                        {isOpen && (
                            <div className="absolute top-7 left-0 w-[262px] bg-white text-black rounded shadow-lg py-3.5 z-50">
                                <div className='w-full flex items-start gap-2 border-b border-b-[#CACDD8] pb-4 px-3.5 relative'>
                                    <div className='absolute -top-[18px] left-4 w-2.5 h-2.5 rounded-xs bg-white rotate-45'></div>
                                    <div>
                                        <TbClockHour3 className='text-4xl text-brand-primary' />
                                    </div>
                                    <div>
                                        <p className='font-normal text-xs'>We are open:</p>
                                        <p className='font-semibold text-[13px] mt-1'>
                                            <span className='text-text-muted mr-1.5'>
                                                Mon-Thu:
                                            </span>
                                            9:00 AM - 5:30 PM
                                        </p>
                                        <p className='font-semibold text-[13px] mt-2'>
                                            <span className='text-text-muted mr-1.5'>
                                                Fr:
                                            </span>
                                            9:00 AM - 6:00 PM
                                        </p>
                                        <p className='font-semibold text-[13px] mt-2'>
                                            <span className='text-text-muted mr-1.5'>
                                                Sat:
                                            </span>
                                            11:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex items-start gap-2 border-b border-b-[#CACDD8] px-3.5 py-2.5'>
                                    <div>
                                        <IoLocationOutline className='text-4xl text-brand-primary' />
                                    </div>
                                    <div>
                                        <p className='font-normal text-[13px]'>Address: 1234 Street Adress, City Address, 1234</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-1 px-4 py-2.5 flex-col'>
                                    <p className='font-normal text-[13px]'>
                                        Phones: <span className='text-brand-primary'>(00) 1234 5678</span>
                                    </p>
                                    <p className='font-normal text-[13px]'>
                                        E-mail: <span className='text-brand-primary'>shop@email.com</span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Address */}
                    <p className='text-text-muted'>
                        Visit our showroom in 1234 Street Address City Address, 1234
                        <span className='ml-1.5 text-white cursor-pointer'>Contact Us</span>
                    </p>

                    {/* Contact & Socials */}
                    <div className='flex items-center gap-2'>
                        <p>Call Us: (00) 1234 5678</p>
                        <div className='flex items-center gap-2'>
                            <Link to='#'><RiFacebookBoxFill /></Link>
                            <Link to='#'><RiInstagramFill /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Nav */}
            <header className='max-w-[1400px] w-full mx-auto flex items-center justify-between py-4 bg-white'>
                <div
                    className='cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    <img src={logo} alt="brand logo" className='w-[85px] h-[70px]' />
                </div>

                {isSearch ? <HeaderSearch /> : <HeaderNav />}

                <div className='flex items-center justify-between gap-6 '>
                    <button
                        className={`text-xl cursor-pointer ${isSearch ? 'text-brand-primary' : 'text-black'}`}
                        onClick={() => setIsSearch(!isSearch)}
                    >
                        {isSearch ? <IoClose /> : <IoSearchSharp />}
                    </button>

                    <button
                        className="relative text-xl text-black cursor-pointer p-2"
                        onClick={() => { setIsShopCart(!isShopCart) }}
                    >
                        <PiShoppingCartBold />

                        <span className={`absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ${cartLength > 0 ? 'block' : 'hidden'}`}
                        >
                            {
                                cartLength
                            }
                        </span>
                    </button>
                    {isShopCart && <MyCart isShopCart={isShopCart} setIsShopCart={setIsShopCart} />}
                    <button
                        className='cursor-pointer size-9'
                        onClick={() => setIsMenu(!isMenu)}
                    >
                        <img src={user} alt="user image" />
                    </button>
                    {isMenu && <Account setIsMenu={setIsMenu} />}
                </div>
            </header>
        </div>
    );
}

export default Header;
