import React from 'react';
import '../styles/store.css'
import Item from './item';
import catalog from './catalog';

function Store(props) {
    const forSale = catalog; 
    const {addToCart} = props;    

    return (
        <div className='store'>
            <h1>Store Content</h1>
            <div className='item-field'>
            {forSale.map((element) => {
                return <div key={element.id}>
                <Item key={element.id} 
                item={element}
                addToCart={addToCart}
                 />
                </div>
            })
            }
            </div>       
        </div>
    )
}

export default Store;

