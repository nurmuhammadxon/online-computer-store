import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function ProductTitle() {
   
    const location = useLocation()
    const pathnameArr = location.pathname.split('/').filter(Boolean)

    const breadcrumbs = pathnameArr.map((item, index) => {
        const path = '/' + pathnameArr.slice(0, index + 1).join('/')

        return (
            <span key={index} className="text-black capitalize">
                <span className="mx-2 text-brand-primary">{'>'}</span>
                <Link to={path} className="hover:underline hover:text-brand-primary text-black font-normal text-xs">
                    {decodeURIComponent(item)}
                </Link>
            </span>
        )
    })

    return (
        <div className="text-sm font-medium pt-5">
            <Link to="/" className="text-black font-normal text-xs hover:underline hover:text-brand-primary">Home</Link>
            {breadcrumbs}
            <h2 className='capitalize font-semibold text-3xl mt-5
            '>
                {
                    pathnameArr.length > 1 ? decodeURIComponent(pathnameArr[pathnameArr.length - 2]) : pathnameArr[pathnameArr.length - 1]
                }
            </h2>
        </div>
    )
}

export default ProductTitle