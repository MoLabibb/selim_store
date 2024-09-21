import React, {useState} from 'react'
import './SwiperCard.css'
import { FaCartPlus, FaRegHeart } from 'react-icons/fa';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { MdCompareArrows } from 'react-icons/md';
import { useDispatch } from'react-redux';
import { ADD_TO_CART } from '../../redux/features/cartSlice';
import { ADD_TO_WISH } from '../../redux/features/favoriteSlice';
import Rating from '../common/Rating';

export default function SwiperCard({item}) {
    console.log(item);
    
    const dispatch = useDispatch();
    const [notification, setNotification] = useState(null);
  
    const handleAddToCart = (item) => {
      return () => {
        dispatch(ADD_TO_CART(item));
        setNotification('Product added successfully!');
        setTimeout(() => setNotification(null), 2000);
      };
    };

  return (
    <div className="product__slide">
    <div className="slide__content">
      <div className='product__card'>
        <div className='product__image'>
          <img src={item.image} alt='not available' />
        </div>
        <div className='product__info'>
          <div className='product__title'>{item.name.substring(0, 30)}</div>
          <span className='price'>
            <div className='discount_price'>
              Now {item.discount_price ? item.discount_price : item.actual_price}
            </div>
            <div className='actual_price'>
              Was {item.actual_price ? item.actual_price : item.discount_price}
            </div>
          </span>
          <div className='rating'>
            {Rating(item.ratings)}
          </div>
        </div>
      </div>
    </div>

    <div className='sale__swiper_buttons'>
      <div onClick={() => dispatch(ADD_TO_WISH(item))}>
        <FaRegHeart className='sale__swiper_btn' />
      </div>
      <div onClick={handleAddToCart(item)}>
        {notification ? <IoCheckmarkCircleSharp />: <FaCartPlus className='icon'/>}
      </div>
      <div>
        <MdCompareArrows className='sale__swiper_btn' />
      </div>
    </div>

    <div className='discount'>
        {(() => {
          const discountPrice = +(item.discount_price || 0).toString().substring(1).replace(',', '');
          const actualPrice = +(item.actual_price || 0).toString().substring(1).replace(',', '');

          if (actualPrice !== 0) {
            const discountPercentage = ((discountPrice / actualPrice) * 100).toFixed(0);
            return `-${discountPercentage}%`;
          }

          return null;
        })()}
      </div>
      {notification && (
        <div className="notification">{notification}</div>
      )}    
  </div>
  )
}
