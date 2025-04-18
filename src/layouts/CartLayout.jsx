import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function CartLayout() {
    const location = useLocation();
    const pathnameArr = location.pathname.split('/').filter(Boolean);

    const breadcrumbs = pathnameArr.map((item, index) => {
        const path = '/' + pathnameArr.slice(0, index + 1).join('/');
        return (
            <span key={index} className="text-black capitalize">
                <span className="mx-2 text-brand-primary">{'>'}</span>
                <Link to={path} className="hover:underline hover:text-brand-primary text-black font-normal text-xs">
                    {decodeURIComponent(item)}
                </Link>
            </span>
        );
    });

    return (
        <div>
            <div>
                <Link to="/" className="text-black font-normal text-xs hover:underline hover:text-brand-primary">
                    Home
                </Link>
                {breadcrumbs}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default CartLayout