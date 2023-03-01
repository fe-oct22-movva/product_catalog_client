import React from 'react';
import heart from '../../../assets/images/Home.svg';
import cart from '../../../assets/images/Cart.svg';
import menu from '../../../assets/images/Menu.svg';
import logo from '../../../assets/images/Logo.svg';
import { HeaderNavLink } from './HeaderNavLink';
import { HeaderIconNavLink } from './HeaderIconNavLink';

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
              <HeaderNavLink to="/" textToDisplay="Home" />
            </li>

            <li className="nav__item">
              <HeaderNavLink to="/phones" textToDisplay="Phones" />
            </li>

            <li className="nav__item">
              <HeaderNavLink to="/tablets" textToDisplay="Tablets" />
            </li>

            <li className="nav__item">
              <HeaderNavLink to="/accessories" textToDisplay="Accessories" />
            </li>
          </ul>
        </nav>

        <div className="aside-container">
          <ul className="aside-container__list">
            <HeaderIconNavLink
              to="/favourites"
              textToDisplay={(
                <li className="aside-container__item">
                  <img src={heart} alt="favourite items" />
                </li>
              )}
            />

            <HeaderIconNavLink
              to="/cart"
              textToDisplay={(
                <li className="aside-container__item">
                  <img src={cart} alt="cart" />
                </li>
              )}
            />

            {false && (
              <HeaderIconNavLink
                to="/menu"
                textToDisplay={(
                  <li className="aside-container__item">
                    <img src={menu} alt="menu" />
                  </li>
                )}
              />
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
