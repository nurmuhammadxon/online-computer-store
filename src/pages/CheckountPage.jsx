import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import Stepper from '../components/Cart/Stapper'

function CheckountPage() {
    return (
        <div>
            <div className='flex items-start justify-between mt-5'>
                <div className='flex items-center gap-5'>
                    <h1 className='font-semibold text-3xl'>Checkout</h1>
                    <ButtonComponent
                        title='Sign In'
                        BorderColor='#0156FF'
                        TextColor='#0156FF'
                        paddingX='50px'
                        paddingY='8px'
                    />
                </div>
                <div className="mb-10">
                    <Stepper currentStep={0} />
                </div>
            </div>
        </div>
    )
}

export default CheckountPage