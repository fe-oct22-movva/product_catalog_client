import React from 'react';
import {Banner} from './components';
import { Cards } from './ProductCard';

import './styles/main.scss';


function App() {
  return (
    <div className="App">
      <Banner />
      <Cards />
    </div>
  );
}


export default App;
