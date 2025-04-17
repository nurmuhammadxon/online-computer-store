import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen bg-brand-primary flex items-center justify-center flex-col gap-3 text-white p-4'>
            <h1 className='text-4xl font-bold'>404 not found</h1>
            <p className='text-xl text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum hic doloribus cupiditate provident suscipit rerum natus repellat quae asperiores illo?</p>
            <button
                onClick={() => navigate('/')}
                className='py-3.5 px-10 bg-blue-900 rounded-md text-lg font-medium cursor-pointer'
            >
                Home
            </button>
        </div>
    )
}

export default ErrorPage