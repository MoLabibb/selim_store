import React from 'react';
import './Cart.css';
import { QTY_INCREMENT, QTY_DECREMENT, REMOVE_FROM_CART, CLEAR_CART } from '../../redux/features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartItems = useSelector((state) => state.cart);

  const total = cart.reduce((acc, product) => {
    acc += +(product.discount_price).substring(1) * product.qty;
    return acc;
  }, 0);

    return (
        <div className="cart__container">
            <h2>Your Shopping Cart  <p className='total__price'>Total: ${total.toFixed(2)}</p></h2>
            
            {cartItems.length > 0 ? 
            <div className="cart__btns">
                <button className='clear__cart' onClick={() => dispatch(CLEAR_CART())}>Clear Cart</button>
                {/* <button className='checkout' onClick={() => window.location.href = "/checkout"}>Checkout</button> */}
                <button className='checkout'>Checkout</button>
            </div>: ' '}


            {cartItems.length === 0 ? (
                <p className='empty__cart'>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="cart__list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart__item">
                                
                                <div className="item__details">

                                    <img src={item.image} alt={item.name} />

                                    <p>{item.name}</p>


                  
                                </div>
                                <div className='control__btns'>
                                    <div className='qty'>
                                        <button onClick={() => dispatch(QTY_INCREMENT(item))}>+</button>
                                        <p>{item.qty}</p>
                                        <button onClick={() => dispatch(QTY_DECREMENT(item))}>-</button>
                                    </div>
                                    <button onClick={() => dispatch(REMOVE_FROM_CART(item))} className="remove__button"><MdClose /></button>
                                </div>
                                
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    );
};

export default Cart;
