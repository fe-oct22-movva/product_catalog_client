import React, {useEffect, useState} from 'react';
import {Header} from './components/HomePage/Header';
import {Footer} from './components/Footer';
import {HomePage} from './components/HomePage/HomePage';
import {Route, Routes, Navigate, resolvePath} from 'react-router-dom';
import './styles/main.scss';
import {PageNotFound} from './components/PageNotFound';
import {Phone} from './types/Phone';
import {getPhones} from './api/phones';

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(setPhones)
      .catch((err) => console.log(err.message));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:5000/phones')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `The status is ${response.status}`
  //         );
  //       }
  //     })
  //     .then((data) => console.log(data))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header />

      <div className="main-container">
        <div className="sections">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};
