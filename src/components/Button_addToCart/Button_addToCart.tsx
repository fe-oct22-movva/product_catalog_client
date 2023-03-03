import styles from '../Button_addToCart/Button_addToCart.module.scss';

import likeEmpty from '../../assets/images/icons/like-empty.png';
import React, {useCallback, useState} from 'react';
import likeYellow from '../../assets/images/icons/like-yellow.png';
import {Phone} from '../../types/types';

interface Props {
  id: string,
  img: string,
  price: number
  name: string,
}

export const Button_addToCart: React.FC<Props> = ({
  id,
  img,
  price,
  name,
}) => {
  const [isLike, setIsLike] = useState(false);

  const handleAddToCart = useCallback(() => {
    const dataForCart = {
      id,
      img,
      name,
      price,
      amount: 1,
    };

    const existingPhonesFromLocalStorage = localStorage.getItem('Cart');
    const phonesFromLocalStorageToObj
      = existingPhonesFromLocalStorage !== null
        ? JSON.parse(existingPhonesFromLocalStorage)
        : null;

    if (!phonesFromLocalStorageToObj) {
      localStorage.setItem('Cart', JSON.stringify([dataForCart]));
    }

    phonesFromLocalStorageToObj.push(dataForCart);

    localStorage.setItem('Cart', JSON.stringify(phonesFromLocalStorageToObj));
  }, []);

  const handleLike = useCallback(() => {
    const dataForFavourites = {
      id,
      img,
      name,
      price
    };

    setIsLike(!isLike);

    const existingPhonesFromLocalStorage = localStorage.getItem('Favourites');
    const phonesFromLocalStorageToObj
      = existingPhonesFromLocalStorage !== null
        ? JSON.parse(existingPhonesFromLocalStorage)
        : null;

    if (!phonesFromLocalStorageToObj) {
      localStorage.setItem('Favourites', JSON.stringify([dataForFavourites]));
    }

    phonesFromLocalStorageToObj.push(dataForFavourites);

    localStorage.setItem(
      'Favourites',
      JSON.stringify(phonesFromLocalStorageToObj)
    );
  }, []);

  return (
    <div className={styles.addToCart}>
      <button className={styles.addToCart__button} onClick={handleAddToCart}>
        Add to cart
      </button>

      <div className={styles.addToCart}>
        <button className={styles.addToCart__like} onClick={handleLike}>
          {!isLike ? (
            <img src={likeEmpty} alt="Like" />
          ) : (
            <img src={likeYellow} alt="Like" />
          )}
        </button>
      </div>
    </div>
  );
};
