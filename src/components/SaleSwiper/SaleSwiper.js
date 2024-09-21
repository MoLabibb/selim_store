import React from 'react';
import './SaleSwiper.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCard from '../swiperCard/SwiperCard';

function SaleSwiper({ products }) {


  return (
    <div className='sale__swiper'>
      <Swiper
        className='swiper'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={4}
        navigation
        loop
        centeredSlides
        breakpoints={{
          0: { slidesPerView: 2 },
          600: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 }
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide className='swiper__item' key={index}>
              <SwiperCard item = {item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SaleSwiper;
