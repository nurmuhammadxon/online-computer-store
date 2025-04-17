import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';

function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation();
    const pathnameArr = location.pathname.split('/').filter(Boolean);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Bu yerda login logic bo‘ladi
        console.log('Email:', email);
        console.log('Password:', password);
        // navigate('/dashboard') yoki boshqa yo‘nalishga yo‘naltirish mumkin
    };

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
        <div className='py-5'>
            <div>
                <Link to="/" className="text-black font-normal text-xs hover:underline hover:text-brand-primary">
                    Home
                </Link>
                {breadcrumbs}
            </div>
            <div className='py-5'>
                <h1 className='font-semibold text-3xl'>Customer Login</h1>
                <div className='flex flex-wrap md:flex-nowrap items-start justify-center gap-9 w-full mt-7'>
                    {/* Left Side (Login Form) */}
                    <div className='flex-1 min-w-[300px] max-w-[564px] min-h-[415px] py-9 px-6 sm:px-14 bg-[#F5F7FF] flex flex-col'>
                        <h3 className='font-semibold text-lg'>Registered Customers</h3>
                        <p className='font-light text-sm mt-2.5'>If you have an account, sign in with your email address.</p>
                        <form onSubmit={handleLogin} className='w-full mt-2.5 flex flex-col gap-2 flex-grow'>
                            <label className='flex flex-col gap-1 w-full'>
                                <span className='font-semibold text-sm'>
                                    Email <span className='text-red-700'>*</span>
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Your Email'
                                    className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm bg-white'
                                />
                            </label>
                            <label className='flex flex-col gap-1 w-full'>
                                <span className='font-semibold text-sm'>
                                    Password <span className='text-red-700'>*</span>
                                </span>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='Your Password'
                                    className='border border-[#A2A6B0] px-4 py-3 rounded-md outline-none font-light text-sm bg-white'
                                />
                            </label>
                            <div className='mt-7 flex gap-6 items-center'>
                                <ButtonComponent
                                    title='Sign In'
                                    BgColor='#0156FF'
                                    TextColor='white'
                                    paddingY='8px'
                                    paddingX='24px'
                                />
                                <Link
                                    to='/forgot-password'
                                    className='font-normal text-sm text-brand-primary'
                                >
                                    Forgot Your Password?
                                </Link>
                            </div>
                        </form>
                    </div>
                    {/* Right Side (New Customer) */}
                    <div className='flex-1 min-w-[300px] max-w-[564px] min-h-[415px] py-9 px-6 sm:px-14 bg-[#F5F7FF] flex flex-col justify-between'>
                        <div>
                            <h3 className='font-semibold text-lg'>New Customer?</h3>
                            <p className='font-light text-sm mt-2.5'>Creating an account has many benefits:</p>
                            <ul className='flex flex-col gap-1.5 mt-3.5 list-disc pl-5'>
                                <li className='font-light text-sm'>Check out faster</li>
                                <li className='font-light text-sm'>Keep more than one address</li>
                                <li className='font-light text-sm'>Track orders and more</li>
                            </ul>
                        </div>
                        <div className='mt-9'>
                            <ButtonComponent
                                title='Create An Account'
                                BgColor='#0156FF'
                                TextColor='white'
                                paddingY='8px'
                                paddingX='24px'
                                onClick={() => navigate('/signup')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
