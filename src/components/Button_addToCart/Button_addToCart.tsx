import styles from '../Button_addToCart/Button_addToCart.module.scss';

import likeEmpty from '../../assets/images/icons/like-empty.png';
import likeYellow from '../../assets/images/icons/like-yellow.png';
import React, {useCallback, useState} from 'react';

interface Props {
  id: string;
  img: string;
  name: string;
  price: number;
}

export const Button_addToCart: React.FC<Props> = ({id, img, name, price}) => {
  const [isLike, setIsLike] = useState(false);

  const handleAddToCart = useCallback(() => {
    const data = {
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
      localStorage.setItem('Cart', JSON.stringify([data]));
    }

    phonesFromLocalStorageToObj.push(data);

    localStorage.setItem('Cart', JSON.stringify(phonesFromLocalStorageToObj));
  }, []);

  const handeLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className={styles.addToCart}>
      <button className={styles.addToCart__button} onClick={handleAddToCart}>
        Add to cart
      </button>

      <div className={styles.addToCart}>
        <button className={styles.addToCart__like} onClick={handeLike}>
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
