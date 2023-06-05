import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-main'>
            <div className='home-heading'>
                <h1>Magical Christmasland</h1>
            </div>
            <div className='home-info'>
                <div className='home-text'>
                    We sell magical potions. They really work!
                </div>
                <div className='home-link'>
                    <Link to='store'>
                        <button>Store</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;