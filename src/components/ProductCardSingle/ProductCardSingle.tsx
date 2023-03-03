import styles from '../ProductCardSingle/ProductCardSingle.module.scss';
import React from 'react';

import {Button_addToCart} from '../Button_addToCart';

interface Props {
  id: string,
  imgUrl: string;
  name: string;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCardSingle: React.FC<Props> = ({
  id,
  imgUrl,
  name,
  price,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__icon} src={imgUrl} />

      <h3 className={styles.card__title}>
        <a href="#" className={styles.card__link}>
          {name}
        </a>
      </h3>

      <p className={styles.card__price}>{price}$</p>

      <p className={styles.card__breakLine}></p>

      <div className={styles.card__features}>
        <div className={styles.card__names}>
          <p className={styles.card__info}>Screen</p>
          <p className={styles.card__info}>Capacity</p>
          <p className={styles.card__info}>RAM</p>
        </div>

        <div className={styles.card__chars}>
          <p className={styles.card__info}>{screen}</p>
          <p className={styles.card__info}>{capacity}</p>
          <p className={styles.card__info}>{ram}</p>
        </div>
      </div>

      <Button_addToCart id={id} img={imgUrl} name={name} price={price} />
    </div>
  );
};
