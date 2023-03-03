import styles from '../ProductCardSingle/ProductCardSingle.module.scss';
import React from 'react';

import {Button_addToCart} from '../Button_addToCart';

interface Props {
  imgUrl: string;
  name: string;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCardSingle: React.FC<Props> = ({
  imgUrl,
  name,
  price,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className={styles.card}>
      {/* <img className={styles.card__icon} src={imgUrl} />

      <h3 className={styles.card__title}>
        <a
          href='#'
          className={styles.card__link}
        >
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </a>
      </h3>

      <p className={styles.card__price}>$999</p>

      <p className={styles.card__breakLine}></p>

      <div className={styles.card__features}>
        <div className={styles.card__names}>
          <p className={styles.card__info}>Screen</p>
          <p className={styles.card__info}>Capacity</p>
          <p className={styles.card__info}>RAM</p>
        </div>

        <div className={styles.card__chars}>
          <p className={styles.card__info}>6.1” OLED</p>
          <p className={styles.card__info}>128 GB</p>
          <p className={styles.card__info}>6 GB</p>
        </div>
      </div> */}

      <img className={styles.card__icon} src={imgUrl} />

      <h3 className={styles.card__title}>
        <a href="#" className={styles.card__link}>
          {name}
        </a>
      </h3>

      <p className={styles.card__price}>{price}</p>

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

      <Button_addToCart />
    </div>
  );
};
