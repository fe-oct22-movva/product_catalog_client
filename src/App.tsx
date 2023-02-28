import React from 'react';
import {Header} from './components/HomePage/Header';
import {Banner} from './components/Banner';
import {Cards} from './components/ProductCard';
import {ShopByCategory} from './components/ShopByCategory';
import {HomePage} from './components/HomePage/HomePage';

import './styles/main.scss';
import {PhoneSpecs} from './components/PhoneSpecs/PhoneSpecs';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cards />
      <ShopByCategory />
      <HomePage />
      <PhoneSpecs />
    </div>
  );
}

export default App;
