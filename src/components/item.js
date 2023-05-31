import React from 'react';
import '../styles/item.css';

function Item(props) {
    const {itemName} = props;
    const {price} = props;
    const {description} = props;    

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
                    defaultValue={0}/>
                    <button>+</button>
                    <button>-</button>
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