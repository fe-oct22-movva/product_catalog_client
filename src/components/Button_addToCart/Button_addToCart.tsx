import styles from '../Button_addToCart/Button_addToCart.module.scss';

import likeEmpty from '../../assets/images/icons/favourites-like.svg';
import likeFull from '../../assets/images/icons/favourites-likeFull.svg';
import React, {useEffect, useState} from 'react';
import {localStorageAdd} from '../../utils/localStorageAdd';
import {cartItem, favouriteItem} from '../../types/types';
import {handleDelete} from '../../utils/localStorageRemove';
import {isIncludeItemLocalStorage} from '../../utils/isIncludeItemLocalStorage';
import { useLocation } from 'react-router-dom';

interface Props {
  id: string;
  img: string;
  price: number;
  fullPrice: number;
  name: string;
  screen: string;
  capacity: string;
  ram: string;
}

export const Button_addToCart: React.FC<Props> = ({
  id,
  img,
  price,
  fullPrice,
  name,
  screen,
  capacity,
  ram,
}) => {
  const [isInFavourites, setIsInFavourites] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isIncludeFav = isIncludeItemLocalStorage('Favourites', id);
    const isIncludeCart = isIncludeItemLocalStorage('Cart', id);

    if (isIncludeFav) {
      setIsInFavourites(true);
    }

    if (isIncludeCart) {
      setIsInCart(true);
    }

    const handleFav = () => {
      const isIncludeFav = isIncludeItemLocalStorage('Favourites', id);

      if (isIncludeFav) {
        setIsInFavourites(true);
      }
    };

    const handleCart = () => {
      const isIncludeCart = isIncludeItemLocalStorage('Cart', id);

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
    const parsedItems = items !== null ? JSON.parse(items) : null;

    if (isInCart) {
      setIsInCart(false);
    }

    if (parsedItems) {
      const includeItem = parsedItems.find((item: cartItem) => item.id === id);

      if (includeItem) {
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
    const parsedItems = items !== null ? JSON.parse(items) : null;

    if (parsedItems) {
      const includeItem = parsedItems.find(
        (item: favouriteItem) => item.id === id
      );
      if (isInFavourites) {
        setIsInFavourites(false);
      }

      if (includeItem) {
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
        fullPrice,
        capacity,
        ram,
      },
      'Favourites'
    );
  };

  return (
    <div className={styles.addToCart}>
      {!isInCart ? (
        <button className={styles.addToCart__button} onClick={handleAddToCart}>
          Add to cart
        </button>
      ) : (
        <button
          className={styles.addToCart__button__active}
          onClick={handleAddToCart}>
          Added
        </button>
      )}

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
