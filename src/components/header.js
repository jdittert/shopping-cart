import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header(props) {

    const {cartLength} = props;
    
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/store'>Store</Link></li>
                    <li><Link to ='/cart'>Cart ({cartLength})</Link></li>
                    <li>Checkout</li>
                </ul>
            </nav>            
        </div>
        
    )
}

export default Header;