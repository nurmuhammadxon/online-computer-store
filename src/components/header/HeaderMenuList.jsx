import React from 'react'
// import { IoIosArrowForward } from "react-icons/io";
import BrandPC from '../home/BrandPC'
import HeaderMenuItem from './HeaderMenuItem'

function HeaderMenuList() {
    const MenuList = [
        {
            id: 1,
            title: 'Everyday Use Notebooks',
            childern: [
                {
                    id: 1,
                    chilTitle: 'MSI Workstation Series',
                    childern: ['MSI WS Series (12)', 'MSI WT Series (31)', 'MSI WE Series (7)']
                },
            ]
        },
        {
            id: 2,
            title: 'MSI Workstation Series',
            childern: [
                {
                    id: 1,
                    chilTitle: 'MSI Prestige Series',
                    childern: false
                }
            ]
        },
        {
            id: 3,
            title: 'MSI Prestige Series',
            childern: false
        },
        {
            id: 4,
            title: 'Gaming Notebooks',
            childern: false
        },
        {
            id: 5,
            title: 'Tablets And Pads',
            childern: false
        },
        {
            id: 6,
            title: 'Netbooks',
            childern: false
        },
        {
            id: 7,
            title: 'Infinity Gaming Notebooks',
            childern: false
        }
    ];

    return (
        <div className='max-w-[1400px] w-full absolute top-[70px] left-0 bg-white shadow-md border border-[#CACDD8]'>
            <div className='border-b border-[#CACDD8]'>
                <ul className='w-1/3 border-r border-[#CACDD8]'>
                    {
                        MenuList.map((item, index) => {
                            const depthLevel = 0
                            return <HeaderMenuItem
                                items={item}
                                key={index}
                                depthLavel={depthLevel}
                            />
                        })
                    }
                </ul>
            </div>
            <BrandPC PaddingY={30} PaddingX={10} />
        </div>
    )
}

export default HeaderMenuList