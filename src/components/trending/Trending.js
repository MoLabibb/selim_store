import React, { useState } from 'react';
import './Trending.css';
import { FaCartPlus, FaRegHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import discountImg from '../../assets/images/disocunt.jpg';
import { ADD_TO_CART } from '../../redux/features/cartSlice';
import { ADD_TO_WISH } from '../../redux/features/favoriteSlice';
import { useDispatch } from 'react-redux';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

function Trending({ products }) {
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        dispatch(ADD_TO_CART(product));
        setSelectedProduct(product);
        setTimeout(() => {
            setSelectedProduct(null);
        }, 2000);
    };

    return (
        <>
            <div className='maintitle'>
                <h6>Trending Clothing</h6>
                <p>Top View In the Week</p>
            </div>
            <div className='trending__container'>
                {products.map((product, index) => (
                    <div className='product__card' key={index}>
                        <div className='product__image'>
                            <img src={product.image} alt='not available' />
                        </div>
                        <div className='product__info'>
                            <div className='product__title'>{product.name}</div>
                            <div className='price'>
                                <div className='discount_price'>Now {product.discount_price ? product.discount_price : product.actual_price}</div>
                                <div className='actual_price'>Was {product.actual_price ? product.actual_price : product.discount_price}</div>
                            </div>
                        </div>
                        
                        <div className='product__buttons'>
                            <div onClick={() => dispatch(ADD_TO_WISH(product))}>
                                <FaRegHeart className='product__btn' />
                            </div>
                            <div onClick={() => handleAddToCart(product)}>
                                {selectedProduct === product ? (
                                    <IoCheckmarkCircleSharp className='product__btn' />
                                    
                                ) : (
                                    <FaCartPlus className='product__btn' />
                                )}
                            </div>
                            <div>
                                <MdCompareArrows className='product__btn' />
                            </div>
                        </div> 
                        {selectedProduct === product ?(<div className="notification">Product Added successfully</div>): ''}
                        <div className='discount__img'>
                            <img src={discountImg} alt='not available' />
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='show__more'>
                <button>View All</button>
            </div>
        </>
    );
}

export default Trending;