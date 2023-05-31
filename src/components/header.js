import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import Store from './store';

function Header() {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/store'>Store</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store />} />
            </Routes>
        </div>
        
    )
}

export default Header;