import React from 'react';
import menu from '../../../assets/images/Menu.svg';
import logo from '../../../assets/images/Logo.svg';
import {HeaderNavLink} from './HeaderNavLink';
import {HeaderIconNavLink} from './HeaderIconNavLink';
import {NavLink} from 'react-router-dom';
import {FavouritesNavHeart} from '../../../components/FavouritesNavHeart';
import {CartNavBasket} from '../../../components/CartNavBasket';
import {scrollTopDefault} from '../../../utils/ScrollToTop';

interface Props {
  setIsBurgerActivated: React.Dispatch<React.SetStateAction<boolean>>;
  isBurger: boolean;
}

export const Header: React.FC<Props> = ({setIsBurgerActivated, isBurger}) => {
  return (
    <>
      {!isBurger && (
        <header className="page__section header">
          <div className="header__content">
            <NavLink to="/" className="logo" onClick={scrollTopDefault}>
              <img
                className="logo__img"
                src={logo}
                alt="Welcome to the Nice Gadgets"
              />
            </NavLink>

            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item" onClick={scrollTopDefault}>
                  <HeaderNavLink to="/" textToDisplay="Home" />
                </li>

                <li className="nav__item">
                  <HeaderNavLink to="/phones" textToDisplay="Phones" />
                </li>

                <li className="nav__item">
                  <HeaderNavLink to="/tablets" textToDisplay="Tablets" />
                </li>

                <li className="nav__item">
                  <HeaderNavLink
                    to="/accessories"
                    textToDisplay="Accessories"
                  />
                </li>
              </ul>
            </nav>

            <div className="aside-container">
              <div
                className="aside-container--burger"
                onClick={() => setIsBurgerActivated((prevState) => !prevState)}>
                <HeaderIconNavLink
                  to="/menu"
                  textToDisplay={
                    <li className="aside-container__item">
                      <img src={menu} alt="menu" />
                    </li>
                  }
                />
              </div>

              <ul className="aside-container__list">
                <FavouritesNavHeart />

                <CartNavBasket />
              </ul>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
