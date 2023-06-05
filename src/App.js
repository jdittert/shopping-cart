import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { useState } from 'react';
import catalog from './components/catalog';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (e) => {
    e.preventDefault();
    const {index} = e.target.dataset;
    const item = catalog[index];
    const quantity = document.getElementById(`item${item.id}-quantity`).value;
    const oldCart = [...cart];
    if (index > -1) {
      if (oldCart.includes(item)) {
        item.quantity = quantity;
      } else {
        if (quantity > 0) {
          const newCart = oldCart.concat(item);
          setCart(newCart);
        }        
      }     
    }
    document.getElementById(`item${item.id}-quantity`).value = 0;
  }

  const removeFromCart = (e) => {
    e.preventDefault();
    const {index} = e.target.dataset;
    const isItem = (item) => item.id === +index;
    const itemIndex = cart.findIndex(isItem);
    let oldCart = [...cart];
    if (itemIndex > -1) {
      oldCart[itemIndex].quantity = 0;
      oldCart.splice(itemIndex, 1);
      setCart(oldCart);
    }
  }
  
  return (
    <div className='wrapper'>      
      <Header cartLength={cart.length}/>
      <Main addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}/>      
      <Footer />
    </div>
  );
}

export default App;
