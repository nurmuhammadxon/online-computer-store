import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent'
import HeaderMenuList from './HeaderMenuList'

function HeaderNav({ displayType }) {
    const [isMenu, setIsMenu] = useState(false)

    const navigationList = [
        // {
        //     id: 1,
        //     title: 'Laptops',
        //     link: "#",
        // },
        {
            id: 2,
            title: 'Desktop PCs',
            link: '#',
        },
        {
            id: 3,
            title: 'Networking Devices',
            link: '#',
        },
        {
            id: 4,
            title: 'Printers & Scanners',
            link: '#',
        },
        {
            id: 5,
            title: 'PC Parts',
            link: '#'
        },
        {
            id: 6,
            title: 'All Other Products',
            link: '#'
        },
        {
            id: 7,
            title: 'Repairs',
            link: '#'
        },
    ]

    return (
        <nav className={`${displayType} flex items-center justify-between gap-8 relative`}>
            <ul className='flex items-center justify-between gap-6'>
                <li
                    className='cursor-pointer inline-block'
                    onClick={() => setIsMenu(!isMenu)}
                >
                    {
                        isMenu
                            ? <span
                                className='font-semibold text-sm text-white bg-brand-primary rounded-[100px] inline-block py-1.5 px-4'
                            >
                                Laptop
                            </span>
                            : <span
                                className='font-semibold text-sm text-black inline-block py-1.5 px-4'>
                                Laptop
                            </span>
                    }
                </li>
                {
                    navigationList.map(item => {
                        return (
                            <li
                                key={item.id}
                            >
                                <Link
                                    to={item.link}
                                    className='font-semibold text-sm text-black hover:text-shadow-md transition-all duration-300'
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <ButtonComponent border={2} BorderColor='#0156FF' TextColor='#0156FF' title='Our Deals' />
            {
                isMenu && <HeaderMenuList />
            }
        </nav>
    )
}

export default HeaderNav