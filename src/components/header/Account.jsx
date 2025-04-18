import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Account({
    setIsMenu
}) {

    const navigate = useNavigate()

    const accountTitleList = [
        {
            id: 1,
            title: 'My  Account',
            link: '#',
        },
        {
            id: 2,
            title: 'My Wish List (0)',
            link: '#'
        },
        {
            id: 3,
            title: 'Compare (0)',
            link: '#'
        },
        {
            id: 4,
            title: 'Create an Account',
            link: '#',
        },
        {
            id: 5,
            title: 'Sign In',
            link: '#'
        },
        {
            id: 6,
            title: 'Login',
            link: '/login'
        },
        {
            id: 7,
            title: 'Contact',
            link: '/contact'
        }
    ]

    const handelButton = (link) => {
        navigate(link)
        setIsMenu(false)
    }

    return (
        <>
            <div className='w-[232px] bg-white py-3 px-6 absolute top-28 right-64 z-50 rounded-md shadow-md'>
                <ul>
                    {
                        accountTitleList.map(item => {
                            return (
                                <li key={item.id}>
                                    <button
                                        className='font-medium text-sm cursor-pointer'
                                        onClick={() => handelButton(item.link)}
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* modal */}
            <div
                className='absolute w-screen h-screen top-0 left-0 cursor-pointer bg-[#00000080]'
                onClick={() => setIsMenu(false)}
            ></div>
        </>
    )
}

export default Account