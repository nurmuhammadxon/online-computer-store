import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

import image1 from '../../assets/AboutCartImage1.png';
import image2 from '../../assets/AboutCartImage2.png';
import { useNavigate } from 'react-router-dom';

import icon1 from '../../assets/AboutCartIcon1.svg';
import icon2 from '../../assets/AboutCartIcon2.svg';
import icon3 from '../../assets/AboutCartIcon3.svg';
import icon4 from '../../assets/AboutCartIcon4.png';

const arrHelp = [
    {
        id: 1,
        title: 'Product Support',
        icon: <FaArrowRightLong />,
        link: '#'
    },
    {
        id: 2,
        title: 'FAQ',
        icon: <FaArrowRightLong />,
        link: '#'
    },
    {
        id: 3,
        title: 'Our Buyer Guide',
        icon: <FaArrowRightLong />,
        link: '#'
    },
];

const ComputerCompanyAbout = [
    {
        id: 1,
        title: 'Intel® Core™ i7',
        disp: 'Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.',
        icon: icon4,
    },
    {
        id: 2,
        title: 'GeForce® RTX SUPER™',
        disp: 'The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.',
        icon: icon3,
    },
    {
        id: 3,
        title: 'SSD technology',
        disp: 'Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.',
        icon: icon2,
    },
    {
        id: 4,
        title: '10th Gen Intel® Core™',
        disp: 'Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to deliver an unprecedented gaming experience.',
        icon: icon1,
    },
];

function ProductAboutFooter() {
    const navigate = useNavigate();

    return (
        <>
            <div
                className='flex items-center justify-center py-20 px-40 text-white'
                style={{
                    background: 'linear-gradient(90deg, #010101 0%, #0E0F10 68.23%, rgba(20, 21, 23, .9) 100%)'
                }}
            >
                <div className='max-w-[465px] w-full'>
                    <h2 className='text-[44px] font-medium mb-14'>
                        Outplay the Competition
                    </h2>
                    <p className='font-light text-lg leading-[26px]'>
                        Experience a 40% boost in computing power from the last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the utmost computing power to bring you an unparalleled gaming experience.
                        <br /><br />
                        <span className="italic">*Performance compared to i7-9700. Specs vary by model.</span>
                    </p>
                </div>
                <div>
                    <img
                        src={image1}
                        alt="MSI Desktop with 10th Gen Intel Core i7 processor"
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col gap-5'>
                    {
                        arrHelp.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className='w-[350px] px-4 py-2.5 bg-[#FFFFFF] border border-[#CACDD8] rounded-md flex items-center justify-between'
                                >
                                    <p className='font-medium text-base text-[#313131]'>{item.title}</p>
                                    <span
                                        className='text-lg text-brand-primary cursor-pointer'
                                        onClick={() => navigate(item.link)}
                                    >{item.icon}</span>
                                </div>
                            );
                        })
                    }
                </div>
                <div>
                    <img src={image2} alt="image2" />
                </div>
            </div>
            <div
                className='flex flex-col items-center justify-center text-white py-16'
                style={{
                    background: 'linear-gradient(90deg, #010101 0%, #0E0F10 68.23%, rgba(20, 21, 23, .9) 100%)'
                }}
            >
                <div className='flex flex-col items-center justify-center gap-7 w-[418px]'>
                    <h2 className='font-medium text-[38px]'>Features</h2>
                    <p className='text-center font-light text-lg leading-[26px]'>
                        The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.
                    </p>
                </div>
                <div className='flex items-center gap-12'>
                    {
                        ComputerCompanyAbout.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className='w-[254px] flex flex-col items-center justify-center'
                                >
                                    <div className='size-[136px] bg-black rounded-full flex items-center justify-center'>
                                        <img src={item.icon} alt={`${item.title} icon`} />
                                    </div>
                                    <p className='text-center font-light text-sm leading-[22px]'>
                                        {item.disp.split(item.title)[0]} <span className="font-bold">{item.title}</span> {item.disp.split(item.title)[1]}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ProductAboutFooter;