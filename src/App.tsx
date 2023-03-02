import React, {useEffect, useState} from 'react';
import {Header} from './components/HomePage/Header';
import {Footer} from './components/Footer';
import {HomePage} from './components/HomePage/HomePage';
import {Route, Routes, Navigate} from 'react-router-dom';
import './styles/main.scss';
import {PageNotFound} from './components/PageNotFound';
import {Phone} from './types/Phone';
import {getPhones} from './api/phones';
import {MobilePhones} from './pages/MobilePhones';
import {Favourites} from './components/Favourites/Favourites';
import {BurgerMenu} from './components/BurgerMenu';

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isBurgerActivated, setIsBurgerActivated] = useState<boolean>(false);

  console.log(phones);

  useEffect(() => {
    getPhones()
      .then(setPhones)
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
