import React from 'react'
import data from '../../LaptopsData'
import { useParams } from 'react-router-dom';

function SpecsProducts() {
    const { id } = useParams();
    const product = data.find(item => item.id === Number(id));

    return (
        <div className='bg-white max-w-[400px] w-full border border-[#CACDD8]'>
            {
                product.specs.map(item => {
                    return (
                        <div className='py-2.5 px-3.5 flex items-center justify-between hover:bg-[#F5F7FF]'>
                            <p className='font-normal text-sm'>
                                {
                                    item.title
                                }
                            </p>
                            <p className='font-normal text-sm'>
                                {
                                    item.spec
                                }

                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SpecsProducts