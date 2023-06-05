import React from 'react';
import '../styles/cart.css';

function Cart(props) {
    const {cart} = props;
    const {removeFromCart} = props;

    return (
        <div className='your-cart'>
            <div>
                <h1>Your Cart</h1>
            </div>
            {cart.length === 0 ? 
            <div className='message'>
                Your cart is empty!
                </div> :
            <ul className='cart'>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className='in-cart-info'>
                                <div className='item-title'>
                                    <div className='item-name'>
                                        {item.itemName}
                                    </div>
                                    <div>
                                        {`($${item.price})`}
                                    </div>
                                </div>
                                <div className='item-total'>
                                    <div>
                                    Qty: {item.quantity}
                                    </div>
                                    <div>
                                        Total: ${item.price * item.quantity}
                                    </div>
                                </div>
                            </div>
                            <div className='remove-button'>
                                <button
                                data-index={item.id}
                                className='add-button'
                                onClick={removeFromCart}>
                                Remove
                                </button>                                
                            </div>                        
                        </li>
                    )
                })}
            </ul>
            }
        </div>
    )
}

export default Cart;