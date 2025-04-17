import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// import icon
import { BiSupport } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { IoPricetagsSharp } from "react-icons/io5";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";

// import pay image
import paypa from '../../assets/PayPa.svg'
import visa from '../../assets/visa.svg'
import googlePay from '../../assets/GooglePay.svg'
import discover from '../../assets/Discover.svg'
import americanExpress from '../../assets/American_express.svg'

// button componet
import ButtonComponent from '../ButtonComponent';

const PayShoppingList = [
    {
        id: 1,
        link: '#',
        image: paypa,
        imageAlt: 'Paypa icon',
        bgColor: '#CCEFFF'
    },
    {
        id: 2,
        link: '#',
        image: visa,
        imageAlt: 'visa icon',
        bgColor: '#D8E3F3'
    },
    {
        id: 3,
        link: '#',
        image: googlePay,
        imageAlt: 'google pay icon',
        bgColor: '#CCEFFF'
    },
    {
        id: 4,
        link: '#',
        image: discover,
        imageAlt: 'discover icon',
        bgColor: '#FCE0CF'
    },
    {
        id: 5,
        link: '#',
        image: americanExpress,
        imageAlt: 'American express icon',
        bgColor: '#D4DEF7'
    },
]

const information = ['About Us', 'About Zip', 'Privacy Policy', 'Search', 'Terms', 'Orders and Returns', 'Contact Us', 'Advanced Search', 'Newsletter Subscription']

const psPart = ['CPUS', 'Add On Cards', 'Hard Drives(Internal)', 'Graphic Cards', 'Keyboards / Mice', 'Cases / Power Supplies / Cooling', 'RAM(Memory)', 'Software', 'Speakers / Headsets', 'Motherboards']

const desktopPCs = ['Custom PCs', 'Servers', 'MSI All-In-One PCs', 'HP/Compaq PCs', 'ASUS PCs', 'Tecs PCs']

const laptops = ['Evryday Use Notebooks', 'MSI Workstation Series', 'MSI Prestige Series', 'Tablets and Pads', 'Netbooks', 'Infinity Gaming Notebooks']

const address = ['Address: 1234 Street Adress City Address, 1234', 'Phones: (00) 1234 5678', 'We are open: Monday-Thursday: 9:00 AM - 5:30 PM', 'Friday: 9:00 AM - 6:00 PM', 'Saturday: 11:00 AM - 5:00 PM', 'E-mail: shop@email.com']

function Footer() {
    const navigate = useNavigate()

    return (
        <footer className='w-full'>
            <div className='w-full bg-bg-light py-16'>
                <div
                    className='max-w-[1160px] w-full mx-auto my-14 flex items-center justify-between'
                >
                    <div className='flex items-center justify-center flex-col'>
                        <div className='flex flex-col items-center justify-center size-16 rounded-full bg-brand-primary text-white text-3xl'>
                            <BiSupport />
                        </div>
                        <span className='w-full text-center mt-6'>
                            <h3 className='font-bold text-lg leading-[133%]'>
                                Product Support
                            </h3>
                            <p className='font-normal text-sm leading-[140%]'>
                                Up to 3 years on-site warranty available for your peace of mind.
                            </p>
                        </span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='flex flex-col items-center justify-center size-16 rounded-full bg-brand-primary text-white text-3xl'>
                            <MdAccountCircle />
                        </div>
                        <span className='w-full text-center mt-6'>
                            <h3 className='font-bold text-lg leading-[133%]'>
                                Personal Account
                            </h3>
                            <p className='font-normal text-sm leading-[140%]'>
                                With big discounts, free delivery and a dedicated support specialist.
                            </p>
                        </span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='flex flex-col items-center justify-center size-16 rounded-full bg-brand-primary text-white text-3xl'>
                            <IoPricetagsSharp />
                        </div>
                        <span className='w-full text-center mt-6'>
                            <h3 className='font-bold text-lg leading-[133%]'>
                                Amazing Savings
                            </h3>
                            <p className='font-normal text-sm leading-[140%]'>
                                Up to 70% off new Products, you can be sure of the best price.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full bg-black text-white'>
                <div className='max-w-[1400px] mx-auto flex items-center justify-between pt-12'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium text-4xl'>Sign Up To Our Newsletter.</h1>
                        <p className='font-normal text-base text-text-dark'>Be the first to hear about the latest offers.</p>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                        <input
                            type="text"
                            required
                            placeholder='Your Email'
                            className='border-2 border-white w-[400px] py-4 rounded-sm px-3.5 font-light text-sm outline-none'
                        />
                        <ButtonComponent
                            title='Subscribe'
                            paddingX='32px'
                            paddingY='16px'
                            BgColor='#0156FF'
                            TextColor='#ffffff'
                            />
                    </div>
                </div>
                <div className='max-w-[1400px] mx-auto mt-11 flex items-start justify-between'>
                    <ul>
                        <li className='font-bold text-sm text-text-dark mb-3.5'>Information</li>
                        {information.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to='#'
                                        className='mt-1.5 text-[13px] text-white font-normal'
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        <li className='font-bold text-sm text-text-dark mb-3.5'>
                            PC Part
                        </li>
                        {psPart.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to='#'
                                        className='mt-1.5 text-[13px] text-white font-normal'
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        <li className='font-bold text-sm text-text-dark mb-3.5'>
                            Desktop PCs
                        </li>
                        {desktopPCs.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to='#'
                                        className='mt-1.5 text-[13px] text-white font-normal'
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        <li className='font-bold text-sm text-text-dark mb-3.5'>
                            Laptops
                        </li>
                        {laptops.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to='#'
                                        className='mt-1.5 text-[13px] text-white font-normal'
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        <li className='font-bold text-sm text-text-dark mb-3.5'>
                            Address
                        </li>
                        {address.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to='#'
                                        className='mt-1.5 text-[13px] text-white font-normal'
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='max-w-[1400px] mx-auto mt-9 flex items-center justify-between border-t border-white py-4 bg-[#020203]'>
                    <div className='flex items-center justify-center gap-3'>
                        <Link to='#'>
                            <RiFacebookBoxFill />
                        </Link>
                        <Link to='#'>
                            <RiInstagramFill />
                        </Link>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        {PayShoppingList.map(item => {
                            return (
                                <div key={item.id}
                                    style={{ backgroundColor: item.bgColor }}
                                    className='w-[34px] h-[22px] py-2 px-[3px] rounded-sm flex items-center justify-center cursor-pointer'
                                    onClick={() => navigate(item.link)}
                                >
                                    <img src={item.image} alt={item.imageAlt} />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <p className='font-medium text-xs text-text-muted'>Copyright © 2020 Shop Pty. Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer