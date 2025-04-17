import React from 'react';
import HeaderMenuItem from './HeaderMenuItem';

function Dropdown({ submenus, depthLevel }) {
    const dropdownClass = depthLevel === 1
        ? 'absolute top-0 right-full'
        : 'absolute top-0 left-full';

    return (
        <ul
            className={`bg-white border border-gray-200 shadow-md min-w-[220px] z-50 ${dropdownClass}`}
        >
            {submenus.map((submenu, index) => (
                <HeaderMenuItem
                    items={submenu}
                    key={index}
                    depthLevel={depthLevel}
                />
            ))}
        </ul>
    );
}

export default Dropdown;