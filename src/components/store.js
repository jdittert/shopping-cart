import React from 'react';
import '../styles/store.css'
import Item from './item';
import catalog from './catalog';

function Store() {
    const forSale = catalog; 
    
    return (
        <div>
            <h1>Store Content</h1>
            <div className='item-field'>
            {forSale.map((element) => {
                return <div key={element.id}>
                <Item key={element.id} 
                itemName={element.itemName}
                price={element.price}
                description={element.description} />
                </div>
            })
            }
            </div>       
        </div>
    )
}

export default Store;

