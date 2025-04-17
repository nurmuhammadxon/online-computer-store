import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../LaptopsData';

function AboutProducts() {
    const { id } = useParams();
    const product = data.find(item => item.id === Number(id));

    // Color state ni qo‘shish
    const [selectedColor, setSelectedColor] = useState(null);

    const color = [
        { id: 1, color: "#4B4D4F" },
        { id: 2, color: "#F2E9DC" },
        { id: 3, color: "#EAE8EB" },
    ];

    if (!product) {
        return <div>Mahsulot topilmadi.</div>;
    }

    return (
        <>
            <p className='text-start font-light text-lg leading-7'>
                {product.aboutProduct}
            </p>
            <div>
                <ul className='flex gap-2 mt-3.5'>
                    {color.map(item => (
                        <li
                            key={item.id}
                            className='flex items-center justify-between font-normal text-[13px] cursor-pointer'
                            onClick={() => setSelectedColor(item.id)}
                        >
                            <span className='size-7 rounded-full flex items-center justify-center'>
                                <span
                                    style={{
                                        width: '23px',
                                        height: '23px',
                                        borderRadius: "100%",
                                        backgroundColor: item.color,
                                        display: 'inline-block',
                                        border: selectedColor === item.id ? '1px solid #0156FF' : 'none',
                                    }}
                                ></span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default AboutProducts;
