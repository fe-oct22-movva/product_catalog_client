import styles from '../Button_addToCart/Button_addToCart.module.scss';

import likeEmpty from '../../assets/images/icons/like-empty.png';
import React, {useState} from 'react';
import likeYellow from '../../assets/images/icons/like-yellow.png';
import {localStorageAdd} from '../../utils/localStorageAdd';
import {cartItem, Favourites} from '../../types/types';

interface Props {
  id: string;
  img: string;
  price: number;
  fullPrice: number;
  name: string;
}

export const Button_addToCart: React.FC<Props> = ({
  id,
  img,
  price,
  fullPrice,
  name,
}) => {
  const [isLike, setIsLike] = useState(false);

  const handleAddToCart = () => {
    const items = localStorage.getItem('Cart');
    const itemsNotNull = items !== null ? JSON.parse(items) : null;

    if (itemsNotNull) {
      const include = itemsNotNull.find((item: cartItem) => item.id === id);

      if (include) {
        include.amount++;

        localStorage.setItem('Cart', JSON.stringify(itemsNotNull));
        window.dispatchEvent(new Event('storage'));

        return;
      }
    }

    localStorageAdd(
      {
        id,
        img,
        name,
        price,
        fullPrice,
        amount: 1,
      },
      'Cart'
    );
  };

  const handleLike = () => {
    setIsLike(!isLike);

    const items = localStorage.getItem('Favourites');
    const itemsNotNull = items !== null ? JSON.parse(items) : null;

    if (itemsNotNull) {
      const include = itemsNotNull.find((item: Favourites) => item.id === id);

      if (include) {
        return;
      }
    }

    localStorageAdd(
      {
        id,
        img,
        name,
        price,
        fullPrice,
      },
      'Favourites'
    );
  };

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
