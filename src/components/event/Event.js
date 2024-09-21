import React from 'react'
import './Event.css'
import Rating from '../common/Rating'
import CountDownDate from '../common/CountDownDate'

function Event({products}) {
  return<>
                    <div className='event__details'>
                        <div className='event__info'>
                            <div className='event__title'>The Apple Shopping Event {new Date().getFullYear() }</div>
                            <div className='event__description'>Apple today announced it will hold a special "Apple Shopping Event" between Black Friday on November 25 and Cyber Monday on November 28 where customers will be eligible to get a gift card when they purchase select products.</div> 
                            <div className='event__date'>{<CountDownDate target={new Date().getTime() + 500000000}/>}</div> 
                        </div>
                    </div>


                    <div className='event__products'>
                        <div className='slide__container'>
                            {
                                products.map((product, index) => {
                                    return (
                                        <div className='slide__item' key={index}>
                                            <div className='slide__card'>
                                                <div className='slide__card_image'><img src={product.image} alt='not available'></img></div>
                                                <div className='slide__info'>
                                                    <div className='slide__info_title'>{product.name}</div>
                                                    <div className='slide__info_rate'>{Rating(product.ratings)}</div>
                                                    <div className='slide__info_price'>{product.discount_price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
  </>
}

export default Event