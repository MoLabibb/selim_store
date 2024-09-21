import React from 'react';
import './CategoriesSwiper.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function CategoriesSwiper({ products }) {
    return (
        <Swiper
            className='hero__swiper'
            spaceBetween={10}
            autoplay={{
                delay: 1000,             
                disableOnInteraction: false, 
                pauseOnMouseEnter: true,   
            }}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={
                {
                    0: {
                        slidesPerView: 3,
                    },
                    676: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    }
                }
            }
        >
            {products.map((product, index) => (
                <SwiperSlide key={index} className='swiper__slide'>
                    <div className='hero__slide'>
                        <div className='image'>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className='hero__slide_title'>{product.title}</div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default CategoriesSwiper;
