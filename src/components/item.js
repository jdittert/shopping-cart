import React from 'react';
import '../styles/item.css';

function Item(props) {
    const {item} = props;    
    const {addToCart} = props;

    const quantityHandler = (e) => {
        const amount = e.target.value;
        item.quantity = amount;
    }

    const incrementQuantity = (e) => {
        e.preventDefault();
        item.quantity = +item.quantity + 1;
        document.querySelector(`#item${item.id}-quantity`).value = item.quantity;
    }

    const decrementQuantity = (e) => {
        e.preventDefault();
        if (item.quantity > 0) {
            item.quantity = +item.quantity - 1;
            document.querySelector(`#item${item.id}-quantity`).value = item.quantity;
        }        
    }

    return (
        <div className='item-card'>
            <div className='item-name'>
                {item.itemName}
            </div>
            <div className='item-img'>
                <img alt='Testing' src={'assets/imgs/green-beaker.png'} />
            </div>
            <div className='item-price'>
                ${item.price}
            </div>
            <div className='item-description'>
                {item.description}
            </div>
            <div>
                <form id={`item${item.id}-form`}
                onSubmit={addToCart}
                data-index={item.id}
                className='add-form'>            
            <div className='item-input'>
                <div>
                    <label htmlFor='item-quantity'>Qty:</label>
                    <input id={`item${item.id}-quantity`}
                    type='number'
                    data-index={item.id}
                    defaultValue={item.quantity}
                    onChange={quantityHandler}/>
                    <button
                    data-index={item.id}
                    onClick={incrementQuantity}>+</button>
                    <button
                    data-index={item.id}
                    onClick={decrementQuantity}>-</button>
                </div>                
            </div>
            <div className='item-add'>
                <button
                type='submit'
                data-index={item.id}
                className='add-button'>
                    Add to cart
                </button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default Item;