import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent';
import image from '../../assets/image 49.png';

// icons
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import BrandPC from '../home/BrandPC';
import { useDispatch } from 'react-redux';
import { addToFilter, clearAllFilters } from '../../store/filterSlice';

function ProductFilter() {
    const [isCategory, setIsCategory] = useState(true);
    const [isPrice, setIsPrice] = useState(true);
    const [isColor, setIsColor] = useState(true);
    const [isFilterName, setIsFilterName] = useState(true);
    const [selectedColor, setSelectedColor] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation().pathname;
    const pathname = location.split('/');

    const newPathname = pathname.length === 2 ? '/' : pathname.slice(0, pathname.length - 2).join('/');

    const handleClearAllFilters = () => {
        dispatch(clearAllFilters());
    };

    const handleAddFilter = (filterItem) => {
        dispatch(addToFilter({ id: filterItem.id, title: filterItem.title || filterItem.color, number: filterItem.number }));
    };

    const category = [
        { id: 1, title: "CUSTOM PCS", number: 15 },
        { id: 2, title: "MSI ALL-IN-ONE PCS", number: 45 },
        { id: 3, title: "HP/COMPAQ PCS", number: 1 },
    ];

    const price = [
        { id: 1, title: "$0.00 - $1,000.00", number: 19 },
        { id: 2, title: "$1,000.00 - $2,000.00", number: 21 },
        { id: 3, title: "$2,000.00 - $3,000.00", number: 9 },
        { id: 4, title: "$3,000.00 - $4,000.00", number: 6 },
        { id: 5, title: "$4,000.00 - $5,000.00", number: 3 },
        { id: 6, title: "$5,000.00 - $6,000.00", number: 1 },
        { id: 7, title: "$6,000.00 - $7,000.00", number: 1 },
        { id: 8, title: "$7,000.00 And Above", number: 1 },
    ];

    const color = [
        { id: 1, color: "#000000" },
        { id: 2, color: "#DB0000" },
    ];

    return (
        <div className='max-w-[234px] mt-5'>
            <div className='w-full flex items-center justify-center py-3'>
                <Link to={newPathname} className='font-semibold text-sm'>
                    {`<`} Back
                </Link>
            </div>
            <div className='flex flex-col gap-2.5 items-center bg-[#F5F7FF] p-4'>
                <h3 className='font-bold text-base'>Filter</h3>
                <ButtonComponent
                    title='Clear Filter'
                    BorderColor='#A2A6B0'
                    TextColor='#A2A6B0'
                    paddingX='40px'
                    paddingY='8px'
                    BgColor='#F5F7FF'
                    onClick={() => handleClearAllFilters()}
                />
                <div className='w-full pt-2.5'>
                    <span
                        className='flex items-center justify-between w-full font-semibold text-sm cursor-pointer'
                        onClick={() => setIsCategory(prev => !prev)}
                    >
                        Category
                        {isCategory ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <ul className='flex flex-col gap-2 mt-3.5'>
                        {isCategory &&
                            category.map(item => (
                                <li
                                    key={item.id}
                                    className='flex items-center justify-between font-normal text-[13px] cursor-pointer'
                                    onClick={() => handleAddFilter(item)}
                                >
                                    <span>{item.title}</span>
                                    <span>{item.number}</span>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className='w-full pt-2.5'>
                    <span
                        className='flex items-center justify-between w-full font-semibold text-sm cursor-pointer'
                        onClick={() => setIsPrice(prev => !prev)}
                    >
                        Price
                        {isPrice ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <ul className='flex flex-col gap-2 mt-3.5'>
                        {isPrice &&
                            price.map(item => (
                                <li
                                    key={item.id}
                                    className='flex items-center justify-between font-normal text-[13px] cursor-pointer'
                                    onClick={() => handleAddFilter(item)}
                                >
                                    <span>{item.title}</span>
                                    <span>{item.number}</span>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className='w-full pt-2.5'>
                    <span
                        className='flex items-center justify-between w-full font-semibold text-sm cursor-pointer'
                        onClick={() => setIsColor(prev => !prev)}
                    >
                        Color
                        {isColor ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <ul className='flex gap-2 mt-3.5'>
                        {isColor &&
                            color.map(item => (
                                <li
                                    key={item.id}
                                    className='flex items-center justify-between font-normal text-[13px] cursor-pointer'
                                    onClick={() => {
                                        handleAddFilter(item);
                                        setSelectedColor(item.id);
                                    }}
                                >
                                    <span
                                        className='size-7 rounded-full flex items-center justify-center'
                                    >
                                        <span
                                            style={{
                                                width: '23px',
                                                height: '23px',
                                                borderRadius: "100%",
                                                backgroundColor: `${item.color}`,
                                                display: 'inline-block',
                                                border: selectedColor === item.id ? '2px solid #0156FF' : 'none',
                                            }}
                                        ></span>
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className='w-full pt-2.5'>
                    <span
                        className='flex items-center justify-between w-full font-semibold text-sm cursor-pointer mb-2.5'
                        onClick={() => setIsFilterName(prev => !prev)}
                    >
                        Filter Name
                        {isFilterName ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    {isFilterName && (
                        <ButtonComponent
                            title='Apply Filters (2)'
                            BgColor='#0156FF'
                            TextColor='#ffffff'
                            paddingX='40px'
                            paddingY='8px'
                        />
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-2.5 items-center mt-1.5'>
                <div className='flex flex-col items-center justify-center gap-3 bg-[#F5F7FF] w-full py-4'>
                    <h3 className='font-bold text-base'>Brands</h3>
                    <ButtonComponent
                        title='All Brands'
                        BorderColor='#A2A6B0'
                        TextColor='#A2A6B0'
                        paddingX='40px'
                        paddingY='8px'
                        BgColor='#F5F7FF'
                    />
                </div>
                <div className='bg-white'>
                    <BrandPC gridCol={2} />
                </div>
            </div>
            <div className='flex flex-col gap-4 items-center p-4 bg-[#F5F7FF] mt-1.5'>
                <h3 className='font-bold text-base'>Compare Products</h3>
                <p className='font-normal text-xs'>You have no items to compare.</p>
            </div>
            <div className='flex flex-col gap-4 items-center p-4 bg-[#F5F7FF] mt-1.5'>
                <h3 className='font-bold text-base'>My Wish List</h3>
                <p className='font-normal text-xs'>You have no items in your wish list.</p>
            </div>
            <div>
                <img src={image} alt="image" />
            </div>
        </div>
    );
}

export default ProductFilter;