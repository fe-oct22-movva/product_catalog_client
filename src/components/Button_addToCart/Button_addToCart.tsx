import styles from '../Button_addToCart/Button_addToCart.module.scss';

import imgLike from '../../components/ProductCard/images/likeEmpty.png';

export const Button_addToCart: React.FC = () => {
  return (
    <div className={styles.button}>
      <a className={styles.button__like}>
        {/* {like === false ? (
          <img src={imgLike} alt="Like" />
        ) : (
          <img src={yellowLike} alt="Like" />
        )} */}
        <img src={imgLike} alt="Like" />
      </a>
    </div>
  );
};
