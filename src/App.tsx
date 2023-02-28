import React from 'react';
import { Header } from './components/HomePage/Header';
import { Banner } from './components';
import { Cards } from './ProductCard';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cards />
    </div>
  );
}


export default App;
