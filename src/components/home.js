import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='home-main'>
            <div className='home-heading'>
                <h1>Magical ChristmasLand</h1>
            </div>
            <div className='home-content'>
                <div>
                    <div>
                        <img src={'assets/imgs/home-bottle.jpg'}
                        alt='Bottle of Lightning'
                        class='home-image' />
                    </div>
                    <div>Credit: Photo by <a href="https://unsplash.com/@wbayreuther?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">William Bayreuther</a> on <a href="https://unsplash.com/s/photos/christmas-potions?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
                </div>
                <div className='home-info'>
                    <div className='home-text'>
                        We sell magical potions. They really work!
                    </div>
                    <div className='home-link'>
                        <Link to='store'>
                            <button
                            className='home-button'>View Store</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;