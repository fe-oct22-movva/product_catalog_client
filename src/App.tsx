/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Header} from './pages/HomePage/Header';
import {Footer} from './components/Footer';
import {HomePage} from './pages/HomePage/HomePage';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import './styles/main.scss';
import {PageNotFound} from './components/PageNotFound';
import {MobilePhones} from './pages/MobilePhones';
import {Favourites} from './components/Favourites/Favourites';
import {BurgerMenu} from './components/BurgerMenu';
import {Cart} from './components/Cart/Cart';
import {Phone} from './types/types';
import {getAllPhones} from './api/phones';
import {ScrollToTop} from './utils/ScrollToTop';
import {Contacts} from './pages/Contacts';
import {CardSpec} from './components/CardSpec';

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isBurgerActivated, setIsBurgerActivated] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    getAllPhones()
      .then((data) => setPhones(data.result))
      .catch((error: string) => console.log(error));

    if (location.pathname === '/menu') {
      setIsBurgerActivated(true);
    }
  }, [location]);

  return (
    <div className="App">
      <Header
        setIsBurgerActivated={setIsBurgerActivated}
        isBurger={isBurgerActivated}
      />

      <div className="sections">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<MobilePhones />} />
          <Route path=":phoneId" element={<CardSpec phones={phones} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="favourites/:phoneId" element={<CardSpec />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="cart/:phoneId" element={<CardSpec />} />
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

      <Footer isBurgerActivated={isBurgerActivated} />
    </div>
  );
};
