import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import heart from '../../../assets/images/Home.svg';
import logo from '../../../assets/images/Logo.svg';

export const Header: React.FC = () => {
  return (
    <header className="page__section header">
      <div className="header__content">
        <a href="/" className="logo">
          <img
            className="logo__img"
            src={logo}
            alt="Welcome to the Nice Gadgets"
          />
        </a>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/"
                className={
                  ({ isActive }) => cn(
                    'nav__link',
                    { 'nav__link--active': isActive }
                  )
                }>
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/phones"
                className={
                  ({ isActive }) => cn(
                    'nav__link',
                    { 'nav__link--active': isActive }
                  )
                }>
                Phones
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/tablets"
                className={
                  ({ isActive }) => cn(
                    'nav__link',
                    { 'nav__link--active': isActive }
                  )
                }>
                Tablets
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/accessories"
                className={
                  ({ isActive }) => cn(
                    'nav__link',
                    { 'nav__link--active': isActive }
                  )
                }>
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header__aside-container">
          <div className="icon">
            <a href="#favourites" className="icon--favourites">
              <img src={heart} alt="" />
            </a>

          </div>
          <div className="icon">
            <a href="#cart" className="icon--cart">
            </a>
          </div>
          {false && (
            <div>
              <a href="#menu" className="icon icon--menu">
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
