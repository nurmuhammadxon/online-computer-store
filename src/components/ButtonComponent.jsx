import React from 'react';

function ButtonComponent({
    type = 'submit',
    title,
    BgColor = '#ffffff',
    TextColor = '#0156FF',
    fontWeight = '600',
    border = 2,
    BorderColor = '#0156FF',
    BorderRadius = 50,
    paddingX = '26px',
    paddingY = '8px',
    onClick,
    fontSize = '14px',
    icon
}) {
    const buttonStyle = {
        backgroundColor: BgColor,
        color: TextColor,
        padding: `${paddingY} ${paddingX}`,
        fontSize,
        fontWeight,
        border: border !== 'none' ? `${border}px solid ${BorderColor}` : 'none',
        borderRadius: `${BorderRadius}px`,
        cursor: 'pointer',
    };

    return (
        <button
            type={type}
            style={buttonStyle}
            onClick={onClick}
            className='hover:shadow-md duration-200 transition-all'
        >
            {icon ? icon : ''}
            {title}
        </button>
    );
}

export default ButtonComponent;
