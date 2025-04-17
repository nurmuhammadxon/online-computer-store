import React from 'react'
import data from '../../LaptopsData'
import { useParams } from 'react-router-dom';

function DetailsProducts() {
    const { id } = useParams();
    const product = data.find(item => item.id === Number(id));

    return (
        <>
            <ul className='list-disc flex flex-col items-start px-3.5'>
                {
                    product.details.map(item => {
                        return (
                            <li className='font-light text-sm leading-6'>
                                {item.trim()}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default DetailsProducts