import React from 'react';

import logo from '../../assets/images/Logo.svg';
import close from '../../images/CloseQuarter.svg';
import './BurgerMenu.scss';
import {FavouritesNavHeart} from '../FavouritesNavHeart/FavouritesNavHeart';
import {CartNavBasket} from '../CartNavBasket/CartNavBasket';

export interface Props {
  isBurger: boolean;
  setIsBurger: (v: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({isBurger, setIsBurger}) => {
  const toggleMenu = () => {
    setIsBurger(!isBurger);
  };

  return (
    <>
      {isBurger && (
        <div className="burger">
          <div className="burger__header">
            <a href="#/home" className="header__link">
              <img src={logo} className="burger__logo" alt="website logo" />
            </a>

            <a href="#/" className="header__link-close" onClick={toggleMenu}>
              <img src={close} className="burger__close" alt="Close button" />
            </a>
          </div>

          <ul className="burger__list">
            <li className="burger__item">
              <a href="#/home" className="burger__link" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="burger__item">
              <a href="#/phones" className="burger__link" onClick={toggleMenu}>
                Phones
              </a>
            </li>
            <li className="burger__item">
              <a href="#/tablets" className="burger__link" onClick={toggleMenu}>
                Tablets
              </a>
            </li>
            <li className="burger__item">
              <a
                href="#/accessories"
                className="burger__link"
                onClick={toggleMenu}>
                Accessories
              </a>
            </li>
          </ul>

          <div className="burger__footer">
            <a
              href="#/favourites"
              className="footer__link-like"
              onClick={toggleMenu}>
              <FavouritesNavHeart />
            </a>

            <a href="#/cart" className="footer__link-cart" onClick={toggleMenu}>
              <CartNavBasket />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
