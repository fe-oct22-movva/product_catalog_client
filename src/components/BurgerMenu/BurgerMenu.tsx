import React from 'react';

import logo from '../../images/Logo.svg';
import close from '../../images/CloseQuarter.svg';
import like from '../../images/likeButtonBurger.svg';
import cart from '../../images/cartButtonBurger.svg';
import './BurgerMenu.scss';

export interface Props {
  isBurger: boolean,
  setIsBurger: (v: boolean) => void;
}

export const BurgerMenu: React.FC<Props> = ({ isBurger, setIsBurger }) => {

  const toggleMenu = () => {
    setIsBurger(!isBurger);
  };

  return (
    <div className="burger">
      <div className="burger__header">
        <a href="#home" className="header__link">
          <img src={logo} className="burger__logo" alt="website logo" />
        </a>

        <a
          href="#close"
          className="header__link-close"
          onClick={toggleMenu}
        >
          <img src={close} className="burger__close" />
        </a>
      </div>

      <ul className="burger__list">
        <li className="burger__item">
          <a href="#home" className="burger__link">Home</a>
        </li>
        <li className="burger__item">
          <a href="#Phones" className="burger__link">Phones</a>
        </li>
        <li className="burger__item">
          <a href="#Tablets" className="burger__link">Tablets</a>
        </li>
        <li className="burger__item">
          <a href="#Accessories" className="burger__link">Accessories</a>
        </li>
      </ul>

      <div className="burger__footer">
        <a href="#like" className="footer__link-like">
          <img src={like} alt="like button" className="burger__like" />
        </a>

        <a href="#cart" className="footer__link-cart">
          <img src={cart} alt="cart button" className="burger__cart" />
        </a>

      </div>
    </div >
  );
};
