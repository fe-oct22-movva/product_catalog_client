import styles from '../ProductCardSingle/ProductCardSingle.module.scss';
import React from 'react';

import {Phone} from '../../types/types';
import {Button_addToCart} from '../Button_addToCart';

interface Props {
  img: string;
  name: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCardSingle: React.FC<Props> = ({
  img,
  name,
  price,
  fullPrice,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__icon} src={img} />

      <h3 className={styles.card__title}>
        <a href="#" className={styles.card__link}>
          {name}
        </a>
      </h3>

      <div className={styles.card__prices}>
        <p className={styles.card__price}>{price}</p>
        <p className={styles.card__fullprice}>{fullPrice}</p>
      </div>

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

      <Button_addToCart
        id={id}
        img={image}
        price={price}
        name={name}
      />
    </div>
  );
};
