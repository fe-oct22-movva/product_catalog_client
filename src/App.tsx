import React, {useEffect, useState} from 'react';
import {Header} from './components/HomePage/Header';
import {Footer} from './components/Footer';
import {HomePage} from './components/HomePage/HomePage';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import './styles/main.scss';
import {PageNotFound} from './components/PageNotFound';
import {MobilePhones} from './pages/MobilePhones';
import {Favourites} from './components/Favourites/Favourites';
import {BurgerMenu} from './components/BurgerMenu';
import {Cart} from './components/Cart/Cart';
import {Phone} from './types/types';
import {getAllPhones} from './api/phones';
import {ItemCardPage} from './components/ItemCardPage/ItemCardPage';
import {ScrollToTop} from './utils/ScrollToTop';

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isBurgerActivated, setIsBurgerActivated] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState('');
  const location = useLocation();

  const startValueCapacity
    = phones.find((el) => el.phoneId === selectedId)?.capacity || '64GB';

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
          <Route
            path="/"
            element={<HomePage setSelectedId={setSelectedId} />}
          />
          <Route path="/phones" element={<MobilePhones />} />
          <Route
            path={`/${selectedId}`}
            element={
              <ItemCardPage
                selectedId={selectedId}
                startValue={startValueCapacity}
              />
            }
          />
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

      <Footer isBurgerActivated={isBurgerActivated} />
    </div>
  );
};
