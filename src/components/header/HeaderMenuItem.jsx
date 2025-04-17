import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './DropDown';

function HeaderMenuItem({ items, depthLevel }) {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (dropdown && ref.current && !ref.current.contains(e.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    const hasSubmenu = Array.isArray(items.childern);

    return (
        <li
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative group"
        >
            <div
                className={`w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer`}
            >
                <span>{items.title || items.chilTitle}</span>
                {hasSubmenu && <span className="ml-2">{depthLevel > 0 ? '▶' : '▼'}</span>}
            </div>

            {hasSubmenu && dropdown && (
                <Dropdown
                    submenus={items.childern}
                    depthLevel={depthLevel + 1}
                />
            )}
        </li>
    );
}

export default HeaderMenuItem;
