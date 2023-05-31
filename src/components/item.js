import React from 'react';
import '../styles/item.css';

function Item(props) {
    const {name} = props;

    return (
        <div className='item-card'>
            <div className='item-name'>
                {name}
            </div>
        </div>
    )
}

export default Item;