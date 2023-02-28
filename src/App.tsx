import React from 'react';
import { Header } from './components/HomePage/Header';
import { Banner } from './components/Banner';
import { Cards } from './components/ProductCard';
import { ShopByCategory } from './components/ShopByCategory';
import { HomePage } from './components/HomePage/HomePage';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cards />
      <ShopByCategory />
      <HomePage />
    </div>
  );
}

export default App;
