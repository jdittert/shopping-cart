import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Store from './store';
import Cart from './cart';

function Main(props) {
    const {addToCart} = props;
    const {removeFromCart} = props;
    const {cart} = props;
    return (
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store 
                addToCart={addToCart}                />} />
                <Route path='/cart' element={<Cart cart={cart}
                removeFromCart={removeFromCart}/>} />
            </Routes>
    )
}

export default Main;