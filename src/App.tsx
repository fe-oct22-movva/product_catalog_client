import React, {useEffect, useState} from 'react';
import './styles/main.scss';
import {Header} from './pages/HomePage/Header';
import {Footer} from './components/Footer';
import {HomePage} from './pages/HomePage/HomePage';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {PageNotFound} from './components/PageNotFound';
import {MobilePhones} from './pages/MobilePhones';
import {Favourites} from './components/Favourites';
import {BurgerMenu} from './components/BurgerMenu';
import {Cart} from './components/Cart';
import {Phone} from './types/types';
import {getAllPhones} from './api/phones';
import {ScrollToTop} from './utils/ScrollToTop';
import {Contacts} from './pages/Contacts';
import {CardSpec} from './components/CardSpec';
import {Tablets} from './pages/Tablets/Tablets';
import {InDevelopmentPage} from './components/InDevelopmentPage';

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isBurgerActivated, setIsBurgerActivated] = useState<boolean>(false);
  const [locationMenu, setLocationMenu] = useState('');
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
        setLoc={setLocationMenu}
      />

      <div className="sections">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<MobilePhones />} />
          <Route
            path="/phones/:phoneId"
            element={<CardSpec phones={phones} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route
            path="favourites/:phoneId"
            element={<CardSpec phones={phones} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<InDevelopmentPage />} />
          <Route path="cart/:phoneId" element={<CardSpec phones={phones} />} />
          <Route
            path="/menu"
            element={
              <BurgerMenu
                isBurger={isBurgerActivated}
                setIsBurger={setIsBurgerActivated}
                locationMenu={locationMenu}
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
