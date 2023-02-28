import React, { useState } from 'react';
import { Header } from './components/HomePage/Header';
import { Banner } from './components';
import { Cards } from './ProductCard';
import { ShopByCategory } from './components/ShopByCategory';
import { HomePage } from './components/HomePage/HomePage';
import {AboutPhone} from './components/AboutPhone';
import { BurgerMenu } from './components/BurgerMenu';

import './styles/main.scss';

function App() {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <div className="App">
      {isBurger === false
        ? (
          <>
            <Header setIsBurger={setIsBurger} isBurger={isBurger}/>
            <Banner />
            <Cards />
            <ShopByCategory />
            <HomePage />
            <AboutPhone />
          </>)
        : <BurgerMenu setIsBurger={setIsBurger} isBurger={isBurger} />}

    </div>
  );
}

export default App;
