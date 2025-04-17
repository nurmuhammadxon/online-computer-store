import laptop1 from './assets/laptop1.png'
import laptop2 from './assets/laptop2.png'
import laptop3 from './assets/laptop3.png'
import laptop4 from './assets/laptop4.png'
import laptop5 from './assets/laptop5.png'
import laptop6 from './assets/laptop6.png'

import PC1 from './assets/case5.png'
import PC2 from './assets/case6.png'
import PC3 from './assets/case7.png'
import PC4 from './assets/case8.png'
import PC5 from './assets/case9.png'
import PC6 from './assets/case10.png'
import PC7 from './assets/case11.png'
import PC8 from './assets/case12.png'

import playStation1 from './assets/playStation1.png'
import playStation2 from './assets/playStation2.png'

import manitor1 from './assets/manitor1.png'
import manitor2 from './assets/manitor2.png'

const laptops = [
    {
        id: 1,
        image: laptop1,
        type: 'Laptop',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 2,
        image: laptop2,
        type: 'MSI Laptop',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: false,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 3,
        image: laptop3,
        type: 'MSI Laptop',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 4,
        image: laptop4,
        type: 'MSI Laptop',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 5,
        image: laptop5,
        type: 'MSI Laptop',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 6,
        image: laptop6,
        type: 'MSI Laptop',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 7,
        image: PC1,
        type: 'Custom Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 8,
        image: PC2,
        type: 'Custom Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 9,
        image: PC3,
        type: 'Custom Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 10,
        image: PC4,
        type: 'Custom Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 11,
        image: PC5,
        type: 'Custom Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 12,
        image: PC6,
        type: 'Desktop Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 13,
        image: PC7,
        type: 'Desktop Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 14,
        image: PC8,
        type: 'Desktop Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 15,
        image: PC8,
        type: 'Desktop Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 16,
        image: PC8,
        type: 'Desktop Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 17,
        image: PC8,
        type: 'Desktop Case',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 18,
        image: playStation1,
        type: 'play station',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 19,
        image: playStation2,
        type: 'play station',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 20,
        image: manitor1,
        type: 'Manitor',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 21,
        image: manitor1,
        type: 'Manitor',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 22,
        image: manitor2,
        type: 'Manitor',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 23,
        image: manitor2,
        type: 'Manitor',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
    {
        id: 24,
        image: manitor2,
        type: 'Manitor',
        name: 'MSI MPG Trident 3',
        title: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias eos repudiandae alias autem suscipit rerum repellat tempora maiores eveniet.',
        aboutProduct: 'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        star: 4,
        reviews: 4,
        price: 499,
        old_price: 699,
        in_stock: true,
        details: ['Intel Core i7-10700F', 'Intel H410', 'WHITE', 'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6', 'SO - DIMM 16GB(16GB x 1) DDR4 2666MHz', '2 total slots(64GB Max)', '512GB(1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB(2.5) 5400RPM', 'Gaming Keyboard GK30 + Gaming Mouse GM11', '3.5 HDD(0 / 0), 2.5 HDD / SSD(1 / 0), M.2(1 / 0)', 'Intel WGI219Vethernet(10 / 100 / 1000M)', 'AX200(WIFI 6) + BT5.1', 'PSU 330W', 'Fan Cooler'],
        specs: [
            {
                id: 1,
                title: 'CPU',
                spec: 'N/A'
            },
            {
                id: 2,
                title: 'Featured',
                spec: 'N/A'
            },
            {
                id: 3,
                title: 'I/O Ports',
                spec: 'N/A'
            }
        ]
    },
]

export default laptops