import React from 'react';

function Cart(props) {
    const {cart} = props;
    const {removeFromCart} = props;

    return (
        <div className='your-cart'>
            <div>
                Your Cart
            </div>
            <ul>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            <div>
                            {item.itemName}
                            </div>
                            <div>
                            {item.quantity}
                            </div>
                            <div>
                                {item.price}
                            </div>
                            <div>
                                Total: {item.price * item.quantity}
                            </div>
                            <div>
                                <button
                                data-index={item.id}
                                onClick={removeFromCart}>
                                Remove
                                </button>                                
                            </div>                        
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart;