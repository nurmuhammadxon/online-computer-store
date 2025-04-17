import React from 'react'

import zipLogo from '../../assets/zip logo.svg'
import { Link } from 'react-router-dom'

function DiscountLink({
    bgColor = '#F5F7FF',
    maxWidth = '562px'
}) {
    return (
        <div className='py-5'
            style={{ backgroundColor: bgColor }}
        >
            <div
                className='w-full mx-auto flex items-center justify-center gap-3.5'
                style={{ maxWidth: maxWidth }}
            >
                <img
                    src={zipLogo}
                    alt="Zip logo"
                    className='w-[77px] h-[27px]'
                />
                <span className='inline-block w-0.5 h-6 bg-[#00AEB8]'></span>
                <p className={`${maxWidth !== '562px' ? 'font-light text-xs' : 'font-semibold text-lg'}  text-[#272560]`}>
                    own it now, up to 6 months interest free
                    <Link
                        to='#'
                        className='font-normal underline decoration-solid ml-2.5'
                    >
                        learn more
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default DiscountLink