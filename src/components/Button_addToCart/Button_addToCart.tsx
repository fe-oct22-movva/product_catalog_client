import styles from '../Button_addToCart/Button_addToCart.module.scss';

import likeEmpty from '../../assets/images/icons/like-empty.png';
import likeYellow from '../../assets/images/icons/like-yellow.png';
import {useState} from 'react';

export const Button_addToCart: React.FC = () => {
  const [isLike, setIsLike] = useState(false);

  const handeLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className={styles.addToCart__link}>
      <a
        className={styles.addToCart__button}
        href="src/components/ProductCard#addToCart">
        Add to cart
      </a>

      <div className={styles.addToCart}>
        <a className={styles.addToCart__like} onClick={handeLike}>
          {isLike === false ? (
            <img src={likeEmpty} alt="Like" />
          ) : (
            <img src={likeYellow} alt="Like" />
          )}
        </a>
      </div>
    </div>
  );
};
