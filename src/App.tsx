import React from 'react';
import {Header} from './components/HomePage/Header';
import {Footer} from './components/Footer';
import {HomePage} from './components/HomePage/HomePage';
import {Route, Routes, Navigate} from 'react-router-dom';
import './styles/main.scss';
import {PageNotFound} from './components/PageNotFound';
import {MobilePhones} from './pages/MobilePhones';
import './assets/fonts/Mont-Bold.otf';
import './assets/fonts/Mont-SemiBold.otf';
import './assets/fonts/Mont-Regular.otf';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="sections">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<MobilePhones />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
