import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Store from './store';

function Main() {
    return (
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store />} />
            </Routes>
    )
}

export default Main;