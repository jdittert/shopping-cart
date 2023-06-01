import React from 'react';
import { useState } from 'react';
import '../styles/item.css';

function Item(props) {
    const {itemName} = props;
    const {price} = props;
    const {description} = props;

    const [quantity, setQuantity] = useState(0);

    const updateQuantity = () => {
        const amount = document.querySelector('input[id="item-quantity"]');
        setQuantity(amount.value);
        amount.value = quantity;
        console.log(quantity);
    }

    const incrementQuantity = () => {
        setQuantity(+quantity + 1);    
    }

    const decrementQuantity = () => {
        setQuantity(+quantity - 1);
    }

    return (
        <div className='item-card'>
            <div className='item-name'>
                {itemName}
            </div>
            <div className='item-img'>
                <img alt='Testing' src={'assets/imgs/green-beaker.png'} />
            </div>
            <div className='item-price'>
                ${price}
            </div>
            <div className='item-description'>
                {description}
            </div>
            <div className='item-input'>
                <div>
                    <label htmlFor='item-quantity'>Qty:</label>
                    <input id='item-quantity' 
                    value={quantity}
                    onChange={updateQuantity}/>
                    <button
                    onClick={incrementQuantity}>+</button>
                    <button
                    onClick={decrementQuantity}>-</button>
                </div>                
            </div>
            <div className='item-add'>
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Item;