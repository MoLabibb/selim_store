import React from 'react'
import './HeroSwiper.css'
import { Navigation, Pagination ,Scrollbar, A11y, Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSwiper({products}) {
    return<Swiper
     className='hero__swiper' 
     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
     spaceBetween={0} slidesPerView={1} 
     navigation = {false} 
     pagination={ true } 
     loop='true' 
     centeredSlides={true} 
     autoplay={{ delay: 5000 }}
     style={{
        "--swiper-pagination-color": "#be1818",
        "--swiper-pagination-bullet-inactive-color": "#FFF",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "14px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
     >  

                {
                    products.map((product, index) => (
                        <SwiperSlide key={index} className='swiper__slide'>
                            <div className='hero__slide'>
                                <img src={product.image} alt={product.title}/>
                            </div>
                        </SwiperSlide>
                    ))
                }
    </Swiper>
}

export default HeroSwiper