import React from 'react';
import data from '../../LaptopsData';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCloseCircle } from "react-icons/io";
import { removeFromFilter, clearAllFilters } from '../../store/filterSlice';
import { toggleMenuType } from '../../store/isMenu';
import { CgMenuGridO } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaAngleDown } from 'react-icons/fa';

function ProductFilterList() {
    const length = data.length;
    const filterArr = useSelector(state => state.filter.value);
    const isMenuType = useSelector((state) => state.menu.isMenuType);
    const dispatch = useDispatch();

    const handleRemoveFilter = (filterItem) => {
        dispatch(removeFromFilter(filterItem));
    };

    const handleClearAllFilters = () => {
        dispatch(clearAllFilters());
    };

    const handleMenu = () => {
        dispatch(toggleMenuType());
    };

    return (
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-xs text-[#A2A6B0] font-normal'>
                    Items 1-{length / 2} of {length}
                </span>
                <div className='flex items-center gap-3'>
                    <button className='py-3 px-4 border-2 border-[#CACDD8] font-semibold text-xs text-[#A2A6B0] cursor-pointer flex items-center gap-2'>
                        Sort By : <span className='text-black flex items-center'>Position <FaAngleDown /></span>
                    </button>
                    <button className='py-3 px-4 border-2 border-[#CACDD8] font-semibold text-xs text-[#A2A6B0] cursor-pointer flex items-center gap-2'>
                        Show : <span className='text-black flex items-center'>{length / 2} per page <FaAngleDown /></span>
                    </button>
                    <button
                        className={`text-3xl  cursor-pointer ${isMenuType ? 'text-black' : 'text-[#A2A6B0]'}`}
                        onClick={handleMenu}
                    >
                        <CgMenuGridO />
                    </button>
                    <button
                        className={`text-3xl cursor-pointer ${isMenuType ? 'text-[#A2A6B0]' : 'text-black'}`}
                        onClick={handleMenu}
                    >
                        <BiMenuAltLeft />
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-2 h-10'>
                {filterArr.length > 0 ? (
                    filterArr.map(item => (
                        <div className='flex items-center justify-between px-4 py-2 border border-[#CACDD8]' key={item.id}>
                            <span className='font-semibold text-xs text-black'>
                                {item.title}
                            </span>
                            <span className='font-normal text-text-muted ml-2'>
                                ({item.number})
                            </span>
                            <span
                                className='ml-2 text-xl text-[#C94D3F] cursor-pointer'
                                onClick={() => handleRemoveFilter(item.id)}
                            >
                                <IoIosCloseCircle />
                            </span>
                        </div>
                    ))
                ) : ''}

                <div className='flex items-center justify-between px-4 py-2 border border-[#CACDD8]'>
                    <span className='font-semibold text-xs text-black'>
                        All
                    </span>
                    <span
                        className='ml-2 text-xl text-[#C94D3F] cursor-pointer'
                        onClick={handleClearAllFilters}
                    >
                        <IoIosCloseCircle />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductFilterList;