import React from 'react'

import roccar from '../../assets/roccat.svg'
import msi from '../../assets/msi.svg'
import razer from '../../assets/razer.svg'
import themaltake from '../../assets/thermaltake.svg'
import adata from '../../assets/adata.svg'
import hp from '../../assets/hp.svg'
import gigabyte from '../../assets/gigabyte.svg'
import { useNavigate } from 'react-router-dom'

function BrandPC({
    PaddingY = 36,
    PaddingX = 0,
    gridCol = 7,
}) {
    const navigate = useNavigate()

    const brandPcList = [
        {
            image: roccar,
            imageAlt: 'roccar icon',
            link: '#'
        },
        {
            image: msi,
            imageAlt: 'msi icon',
            link: '#'
        },
        {
            image: razer,
            imageAlt: 'razer icon',
            link: '#'
        },
        {
            image: themaltake,
            imageAlt: 'themaltake icon',
            link: '#'
        },
        {
            image: adata,
            imageAlt: 'adata icon',
            link: '#'
        },
        {
            image: hp,
            imageAlt: 'hp icon',
            link: '#'
        },
        {
            image: gigabyte,
            imageAlt: 'gigabyte icon',
            link: '#'
        },
    ]

    return (
        <div
            className='w-full grid gap-4 items-center justify-items-center'
            style={{ gridTemplateColumns: `repeat(${gridCol}, minmax(0, 1fr))` }}
        >
            {
                brandPcList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => navigate(item.link)}
                            style={{ padding: `${PaddingY}px ${PaddingX}px` }}
                            className='max-w-[200px] w-full object-center flex items-center justify-center cursor-pointer hover:bg-[#F5F7FF] duration-200'
                        >
                            <img src={item.image} alt={item.imageAlt} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BrandPC