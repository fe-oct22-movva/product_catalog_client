import styles from '../ProductCardSingle/ProductCardSingle.module.scss';
import React, {useState} from 'react';

import whiteMobile from '../../components/ProductCard/images/white.jpg';
import {Button_addToCart} from '../Button_addToCart';

export const ProductCardSingle: React.FC = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__icon} src={whiteMobile} />

      <h3 className={styles.card__title}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
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
      </div>

      <div className={styles.card__link}>
        <a
          className={styles.card__button}
          href="src/components/ProductCard#addToCart">
          Add to cart
        </a>

        <Button_addToCart />
      </div>
    </div>
  );
};
