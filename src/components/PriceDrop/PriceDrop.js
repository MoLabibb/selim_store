import { Navigation, Pagination ,Scrollbar, A11y, Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from 'react';
import Product from "../productCard/Product";
import './PriceDrop.css'

function PriceDrop({ products }) {  
    if (!products || products.length === 0) {
        return <div>No products available</div>; // Fallback UI
    }
    return (
<Swiper className='swiper' modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={5} navigation  loop='true' centeredSlides={false}
     breakpoints={
        {
            0: {
                slidesPerView: 2,
            },

            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },

        }
    }

>
    {products.map((product, index) => {
        return (
            <SwiperSlide className='swiper__item' key={index}>
                <Product 
                  key={index}
                  product={product} 
                />
          </SwiperSlide>
          

        )

    })}
</Swiper>


);
}

export default PriceDrop;
