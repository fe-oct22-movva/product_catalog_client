import styles from '../Button_addToCart/Button_addToCart.module.scss';

import imgLike from '../../components/ProductCard/images/likeEmpty.png';

export const Button_addToCart: React.FC = () => {
  return (
    <div className={styles.addToCart__link}>
      <a
        className={styles.addToCart__button}
        href="src/components/ProductCard#addToCart"
      >
        Add to cart
      </a>

      <div className={styles.addToCart}>
        <a className={styles.addToCart__like}>
          {/* {like === false ? (
          <img src={imgLike} alt="Like" />
        ) : (
          <img src={yellowLike} alt="Like" />
        )} */}
          <img src={imgLike} alt="Like" />
        </a>
      </div>
    </div>
  );
};


