import React, { useState } from 'react';
import './Product.css';
import { FaCartPlus, FaRegHeart, FaSearch, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ADD_TO_CART } from '../../redux/features/cartSlice';
import { ADD_TO_WISH } from '../../redux/features/favoriteSlice';
import { useDispatch } from 'react-redux';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

function Product({ product, index }) {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(null);

  const handleAddToCart = () => {
    dispatch(ADD_TO_CART(product));
    setNotification('Product added successfully!');

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div className={`product__card`} key={index}>
      <div className='product__image'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product__rate'>
        <span>{product.ratings}</span>
        <span><FaStar className='star' /></span>
        <span>(2.1K)</span>
      </div>

      <div className='product__summary'>
        <div className='product__title'>
          {product.name.length > 29 ? `${product.name.substring(0, 29)}...` : product.name}
        </div>
        <div className='product__description'>
          Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.
        </div>
        <div className='product__price'>
          {product.discount_price ? (
            <span className='price__after'>{product.discount_price} (32%) OFF</span>
          ) : (
            <span className='price__before'>{product.actual_price}</span>
          )}
        </div>
        <div className="service__offers">
          <span className="service__offer">Free Delivery</span>
          <span className="service__offer express">Express</span>
        </div>
      </div>

      <div className='card__btns'>
        <div className='search__btn'>
          <Link to='/shop'><FaSearch className='icon' /></Link>
        </div>
        <div className='add__to_wish' onClick={() => dispatch(ADD_TO_WISH(product))}>
          <div><FaRegHeart className='icon' /></div>
        </div>
        <div className='add__to_cart' onClick={handleAddToCart}>
          <div>{notification ? <IoCheckmarkDoneCircle />: <FaCartPlus className='icon'/>}</div>
        </div>
      </div>

      {notification && (
        <div className="notification">{notification}</div>
      )}
    </div>
  );
}

export default Product;