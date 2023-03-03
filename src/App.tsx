import React, {useEffect, useState} from 'react';
import {Header} from './components/HomePage/Header';
import {Footer} from './components/Footer';
import {HomePage} from './components/HomePage/HomePage';
import {Route, Routes, Navigate} from 'react-router-dom';
import './styles/main.scss';
import {PageNotFound} from './components/PageNotFound';
import {getPhones} from './api/phones';
import {MobilePhones} from './pages/MobilePhones';
import {Favourites} from './components/Favourites/Favourites';
import {BurgerMenu} from './components/BurgerMenu';
import {Cart} from './components/Cart/Cart';

export const App: React.FC = () => {
  // const [phones, setPhones] = useState<Phone[]>([]);
  const [isBurgerActivated, setIsBurgerActivated] = useState<boolean>(false);

  useEffect(() => {
    getPhones()
      .then((data) => data.result)
      .catch((error: string) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header setIsBurgerActivated={setIsBurgerActivated} />

      <div className="sections">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<MobilePhones />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/menu"
            element={
              <BurgerMenu
                isBurger={isBurgerActivated}
                setIsBurger={setIsBurgerActivated}
              />
            }
          />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
