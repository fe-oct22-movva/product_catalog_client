import React, {useEffect, useState} from 'react';
import heart from '../../../assets/images/Favourites.svg';
import cart from '../../../assets/images/Cart.svg';
import menu from '../../../assets/images/Menu.svg';
import logo from '../../../assets/images/Logo.svg';
import {HeaderNavLink} from './HeaderNavLink';
import {HeaderIconNavLink} from './HeaderIconNavLink';
import {NavLink} from 'react-router-dom';

interface Props {
  setIsBurgerActivated: React.Dispatch<React.SetStateAction<boolean>>;
  isBurger: boolean;
}

export const Header: React.FC<Props> = ({setIsBurgerActivated, isBurger}) => {
  const [favouritesFromLocal, setFavouritesFromLocal] = useState<string | null>(
    null
  );
  const [cartFromLocal, setCartFromLocal] = useState<string | null>(null);

  const favouritesItems
    = favouritesFromLocal === null ? [] : JSON.parse(favouritesFromLocal).length;
  const cartItems
    = cartFromLocal === null ? [] : JSON.parse(cartFromLocal).length;

  useEffect(() => {
    setFavouritesFromLocal(localStorage.getItem('Favourites'));
    setCartFromLocal(localStorage.getItem('Cart'));

    const handleStorage = () => {
      setFavouritesFromLocal(localStorage.getItem('Favourites'));
      setCartFromLocal(localStorage.getItem('Cart'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [favouritesItems, favouritesFromLocal, cartFromLocal, cartItems]);

  return (
    <>
      {!isBurger && (
        <header className="page__section header">
          <div className="header__content">
            <NavLink to="/" className="logo">
              <img
                className="logo__img"
                src={logo}
                alt="Welcome to the Nice Gadgets"
              />
            </NavLink>

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
                <HeaderIconNavLink
                  to="/favourites"
                  textToDisplay={
                    <li className="aside-container__item">
                      <img
                        className="aside-container__item-photo"
                        src={heart}
                        alt="favourite items"
                      />

                      {favouritesItems > 0 && (
                        <p className="aside-container__item-fav-counter">
                          {favouritesItems}
                        </p>
                      )}
                    </li>
                  }
                />

                <HeaderIconNavLink
                  to="/cart"
                  textToDisplay={
                    <li className="aside-container__item">
                      <img
                        className="aside-container__item-photo"
                        src={cart}
                        alt="cart"
                      />

                      {cartItems > 0 && (
                        <p className="aside-container__item-fav-counter">
                          {cartItems}
                        </p>
                      )}
                    </li>
                  }
                />
              </ul>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
