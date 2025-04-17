import React from 'react'
import data from '../../LaptopsData'
import titleBgImage from '../../assets/custome builds banner.png'
import MSILaptops from '../../assets/MSI Laptops.png'
import MSIManitor from '../../assets/msi manitor.png'
import DesktopPc from '../../assets/desktopCase.png'
import HomeProducts from '../ProductCard/HomeProducts';

function PopularProducts() {

    const products = (type) => {
        return data.filter(t => t.type === type)
    }

    const arr = [
        {
            title: 'Custome Builds',
            arrName: getTitleArr('custome'),
            imge: titleBgImage,
            productType: products('Custom Case'),
            link: '#'
        },
        {
            title: 'MSI Laptops',
            arrName: getTitleArr('msi'),
            imge: MSILaptops,
            productType: products('MSI Laptop'),
            link: '#'
        },
        {
            title: 'Desktops',
            arrName: getTitleArr('desktop'),
            imge: DesktopPc,
            productType: products('Desktop Case'),
            link: '#'
        },
        {
            title: 'Gaming Monitors',
            arrName: getTitleArr('manitor'),
            imge: MSIManitor,
            productType: products('Manitor'),
            link: '#'
        }
    ]

    function getTitleArr(arrName) {
        switch (arrName) {
            case 'msi':
                return [
                    { title: 'MSI GS Series', link: '#' },
                    { title: 'MSI GT Series', link: '#' },
                    { title: 'MSI GL Series', link: '#' },
                    { title: 'MSI GE Series', link: '#' }
                ];

            case 'desktop':
                return [
                    { title: 'MSI Infinute Series', link: '#' },
                    { title: 'MSI Triden', link: '#' },
                    { title: 'MSI GL Series', link: '#' },
                    { title: 'MSI Nightblade', link: '#' },
                ];

            case 'manitor':
                return [];

            case 'custome':
                return [];
        }
    }

    return (
        <>
            {
                arr.map((item, index) => {
                    return (
                        <HomeProducts
                            title={item.title}
                            titleArr={item.arrName}
                            productArry={item.productType}
                            titleLink={item.link}
                            titleBgImage={item.imge}
                            key={index}
                        />
                    )
                })
            }
        </>
    )
}

export default PopularProducts