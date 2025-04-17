import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';

import { FiPhone } from "react-icons/fi";
import { TbClockHour3 } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactPage() {

    const location = useLocation();
    const pathnameArr = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = pathnameArr.map((item, index) => {
        const path = '/' + pathnameArr.slice(0, index + 1).join('/')

        return (
            <span key={index} className="text-black capitalize">
                <span className="mx-2 text-brand-primary">{'>'}</span>
                <Link to={path} className="hover:underline hover:text-brand-primary text-black font-normal text-xs">
                    {decodeURIComponent(item)}
                </Link>
            </span>
        )
    })

    const contactList = [
        {
            id: 1,
            name: 'Address:',
            title: "1234 Street Adress City Address, 1234",
            icon: <IoLocationOutline />
        },
        {
            id: 2,
            name: 'Phone:',
            title: "(00)1234 5678",
            icon: <FiPhone />
        },
        {
            id: 3,
            name: 'We are open:',
            title: `Monday - Thursday: 9:00 AM - 5:30 PM Friday 9:00 AM - 6:00 PM Saturday: 11:00 AM - 5:00 PM`,
            icon: <TbClockHour3 />
        },
        {
            id: 4,
            name: 'E-mail:',
            title: "shop@email.com",
            icon: <MdOutlineMailOutline />
        },

    ]

    return (
        <div className='py-5'>
            <div>
                <Link to="/" className="text-black font-normal text-xs hover:underline hover:text-brand-primary">
                    Home
                </Link>
                {breadcrumbs}
            </div>
            <div className='w-full flex justify-between'>
                <div className='py-5 w-2/3'>
                    <div>
                        <h1 className='font-semibold text-2xl'>Contact Us</h1>
                        <p className='font-normal text-base leading-7'>
                            We love hearing from you, our Shop customers.
                            <br />
                            Please contact us and we will make sure to get back to you as soon as we possibly can.
                        </p>
                    </div>
                    <form className='flex flex-wrap py-5 gap-7'>
                        <label className='max-w-[450px] w-full flex flex-col'>
                            <span className='font-semibold text-sm'>
                                Your Name <span className='text-red-700'>*</span>
                            </span>
                            <input
                                type="text"
                                required
                                placeholder='Your Name'
                                className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm bg-white'
                            />
                        </label>
                        <label className='max-w-[450px] w-full flex flex-col'>
                            <span className='font-semibold text-sm'>
                                Your Email <span className='text-red-700'>*</span>
                            </span>
                            <input
                                type="email"
                                required
                                placeholder='Your Email'
                                className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm'
                            />
                        </label>
                        <label className='max-w-[450px] w-full flex flex-col'>
                            <span className='font-semibold text-sm'>Your Phone Number</span>
                            <input
                                type="text"
                                placeholder='Your Phone'
                                className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm'
                            />
                        </label>
                        <label className='w-full flex flex-col'>
                            <span className='font-semibold text-sm'>
                                What’s on your mind? <span className='text-red-700'>*</span>
                            </span>
                            <textarea
                                required
                                placeholder='Jot us a note and we’ll get back to you as quickly as possible'
                                className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm h-full max-h-[240px]'
                            ></textarea>
                        </label>
                        <ButtonComponent
                            title='Submit'
                            BgColor='#0156FF'
                            TextColor='white'
                            paddingY='8px'
                            paddingX='24px'
                        />
                    </form>
                </div>
                <div className='w-1/3'>
                    <div className='py-7 px-8 bg-[#F5F7FF]'>
                        <ul className='flex flex-col gap-3.5'>
                            {
                                contactList.map(item => {
                                    return (
                                        <li
                                            className='flex gap-2.5'
                                            key={item.id}
                                        >
                                            <span className='text-4xl'>
                                                {item.icon}
                                            </span>
                                            <span className='flex flex-col gap-1'>
                                                <span className='font-semibold text-lg'>
                                                    {item.name}
                                                </span>
                                                {
                                                    item.name === 'E-mail:' ?
                                                        <Link
                                                            to='#'
                                                            className='font-normal text-sm text-brand-primary'
                                                        >
                                                            {item.title}
                                                        </Link>
                                                        : <span className='font-normal text-sm'>
                                                            {item.title}
                                                        </span>
                                                }
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage