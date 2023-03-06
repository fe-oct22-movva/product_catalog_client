import styles from '../Button_addToCart/Button_addToCart.module.scss';

import likeEmpty from '../../assets/images/icons/favourites-like.svg';
import likeFull from '../../assets/images/icons/favourites-likeFull.svg';
import React, {useEffect, useState} from 'react';
import {localStorageAdd} from '../../utils/localStorageAdd';
import {cartItem, Favourites} from '../../types/types';
import {handleDelete} from '../../utils/localStorageRemove';

interface Props {
  id: string;
  img: string;
  price: number;
  name: string;
  screen: string;
  capacity: string;
  ram: string;
}

export const Button_addToCart: React.FC<Props> = ({
  id,
  img,
  price,
  name,
  screen,
  capacity,
  ram,
}) => {
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const getFavourites = localStorage.getItem('Favourites');

    const favouritesItems
      = getFavourites === null ? [] : JSON.parse(getFavourites);
    const isIncludeFav = favouritesItems
      .find((favourite: Favourites) => favourite.id === id);

    if (isIncludeFav) {
      setIsInFavourites(true);
    }

    const handleFav = () => {
      const getFavourites = localStorage.getItem('Favourites');

      const favouritesItems
      = getFavourites === null ? [] : JSON.parse(getFavourites);
      const isIncludeFav = favouritesItems
        .find((favourite: Favourites) => favourite.id === id);

      if (isIncludeFav) {
        setIsInFavourites(true);
      }
    };

    const getCarts = localStorage.getItem('Cart');

    const CartItems
      = getCarts === null ? [] : JSON.parse(getCarts);
    const isIncludeCart = CartItems
      .find((cart: cartItem) => cart.id === id);

    if (isIncludeCart) {
      setIsInCart(true);
    }

    const handleCart = () => {
      const getCarts = localStorage.getItem('Cart');

      const CartItems
        = getCarts === null ? [] : JSON.parse(getCarts);
      const isIncludeCart = CartItems
        .find((cart: cartItem) => cart.id === id);

      if (isIncludeCart) {
        setIsInCart(true);
      }
    };

    window.addEventListener('storage', handleFav);
    window.addEventListener('storage', handleCart);
    return () => {
      window.removeEventListener('storage', handleFav);
      window.removeEventListener('storage', handleCart);
    };
  }, [isInFavourites, isInCart]);

  const handleAddToCart = () => {
    const items = localStorage.getItem('Cart');
    const itemsNotNull = items !== null ? JSON.parse(items) : null;

    if (isInCart) {
      setIsInCart(false);
    }

    if (itemsNotNull) {
      const include = itemsNotNull.find((item: cartItem) => item.id === id);

      if (include) {
        handleDelete(id, 'Cart');

        return;
      }
    }

    localStorageAdd(
      {
        id,
        img,
        name,
        price,
        amount: 1,
      },
      'Cart'
    );
  };

  const handleLike = () => {
    const items = localStorage.getItem('Favourites');
    const itemsNotNull = items !== null ? JSON.parse(items) : null;

    if (itemsNotNull) {
      const include = itemsNotNull.find((item: Favourites) => item.id === id);
      if (isInFavourites) {
        setIsInFavourites(false);
      }

      if (include) {
        handleDelete(id, 'Favourites');

        return;
      }
    }

    localStorageAdd(
      {
        id,
        img,
        name,
        price,
        screen,
        capacity,
        ram,
      },
      'Favourites'
    );
  };

  return (
    <div className={styles.addToCart}>
      {
        !isInCart ? (
          <button className={styles.addToCart__button} onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : (
          <button className={styles.addToCart__button__active} onClick={handleAddToCart}>
            Added
          </button>
        )
      }

      <div className={styles.addToCart}>
        <button className={styles.addToCart__like} onClick={handleLike}>
          {!isInFavourites ? (
            <img src={likeEmpty} alt="Like" />
          ) : (
            <img src={likeFull} alt="Like" />
          )}
        </button>
      </div>
    </div>
  );
};
