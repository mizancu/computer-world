import Image from 'next/image';
import React from 'react';
import { Carousel } from 'antd';

const Slider = () => {
      const contentStyle = {
            // height: '250px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
      };
      return (
            <div >
                  <Carousel autoplay className='place-content-center grid grid-cols-1'>
                        <Image
                              style={contentStyle}
                              src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp"
                              height={250}
                              width={982}
                              alt='Computer image'
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <Image
                              style={contentStyle}
                              src="https://www.startech.com.bd/image/cache/catalog/home/banner/gazipur-offer-home-page-982x500.webp"
                              height={250}
                              width={982}
                              alt='Computer image'
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <Image
                              style={contentStyle}
                              src="https://www.startech.com.bd/image/cache/catalog/home/banner/gazipur-offer-home-page-982x500.webp"
                              height={250}
                              width={982}
                              alt='Computer image'
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                  </Carousel>
            </div>
      );
};

export default Slider;
// src = "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/page/banners/all-in-one-business-computer-dell-scp.jpg?fmt=jpg&wid=2800&hei=839"

// src = "https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp" 