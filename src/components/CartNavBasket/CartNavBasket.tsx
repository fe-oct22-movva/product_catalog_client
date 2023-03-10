import React, {memo, useEffect, useState} from 'react';
import cart from '../../assets/images/Cart.svg';
import {HeaderIconNavLink} from '../../pages/HomePage/Header/HeaderIconNavLink';

export const CartNavBasket = memo(() => {
  const [cartFromLocal, setCartFromLocal] = useState<string | null>(null);

  const cartItems
    = cartFromLocal === null ? [] : JSON.parse(cartFromLocal).length;

  useEffect(() => {
    setCartFromLocal(localStorage.getItem('Cart'));

    const handleStorage = () => {
      setCartFromLocal(localStorage.getItem('Cart'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [cartFromLocal, cartItems]);

  return (
    <HeaderIconNavLink
      to="/cart"
      textToDisplay={
        <li className="aside-container__item">
          <img className="aside-container__item-photo" src={cart} alt="cart" />

          {cartItems > 0 && (
            <p className="aside-container__item-fav-counter">{cartItems}</p>
          )}
        </li>
      }
    />
  );
});

CartNavBasket.displayName = 'CartNavBasket';
