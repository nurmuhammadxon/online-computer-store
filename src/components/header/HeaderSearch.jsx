import React, { useState } from 'react';
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";

function HeaderSearch() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <form
            className='w-[1100px] mx-auto'
            onSubmit={handleSearch}
        >
            <label
                htmlFor="searchInput"
                className='w-full flex items-center justify-between bg-gray-100 rounded-4xl p-4 pr-5 relative'
            >
                <input
                    id="searchInput"
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder='Search entire store here...'
                    className='text-sm font-normal py-1 pl-3 w-8/12 outline-none'
                />
                <span className='text-xl cursor-pointer absolute right-4'>
                    {searchQuery ? (
                        <IoCloseSharp onClick={clearSearch} />
                    ) : (
                        <IoSearchSharp />
                    )}
                </span>
            </label>
        </form>
    );
}

export default HeaderSearch;