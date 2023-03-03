import styles from '../Button_addToCart/Button_addToCart.module.scss';

import likeEmpty from '../../assets/images/icons/like-empty.png';
import likeYellow from '../../assets/images/icons/like-yellow.png';
import React, {useCallback, useState} from 'react';
import {Phone} from '../../types/types';

interface Props {
  phone: Phone;
}

export const Button_addToCart: React.FC<Props> = ({phone}) => {
  const [isLike, setIsLike] = useState(false);

  const handleAddToCart = useCallback(() => {
    const {
      id,
      image,
      name,
      price,
    } = phone;

    const data = {
      id,
      image,
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
      localStorage.setItem('Cart', JSON.stringify([data]));
    }

    phonesFromLocalStorageToObj.push(data);

    localStorage.setItem('Cart', JSON.stringify(phonesFromLocalStorageToObj));
  }, []);

  const handleLike = useCallback(() => {
    setIsLike(!isLike);

    const existingPhonesFromLocalStorage = localStorage.getItem('Favourites');
    const phonesFromLocalStorageToObj
      = existingPhonesFromLocalStorage !== null
        ? JSON.parse(existingPhonesFromLocalStorage)
        : null;

    if (!phonesFromLocalStorageToObj) {
      localStorage.setItem('Favourites', JSON.stringify([phone]));
    }

    phonesFromLocalStorageToObj.push(phone);

    localStorage.setItem('Favourites', JSON.stringify(phonesFromLocalStorageToObj));
  }, []);

  return (
    <div className={styles.addToCart}>
      <button className={styles.addToCart__button} onClick={handleAddToCart}>
        Add to cart
      </button>

      <div className={styles.addToCart}>
        <button className={styles.addToCart__like} onClick={handleLike} >
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
