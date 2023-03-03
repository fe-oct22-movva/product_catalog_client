import styles from '../ProductCardSingle/ProductCardSingle.module.scss';
import React from 'react';

import {Button_addToCart} from '../Button_addToCart';
import {Phone} from '../../types/types';

interface Props {
  phone: Phone;
}

export const ProductCardSingle: React.FC<Props> = ({phone}) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__icon} src={phone.image} />

      <h3 className={styles.card__title}>
        <a href="#" className={styles.card__link}>
          {phone.name}
        </a>
      </h3>

      <div className={styles.card__prices}>
        <p className={styles.card__price}>{`$${phone.price}`}</p>

        <p className={styles.card__fullprice}>{`$${phone.fullPrice}`}</p>
      </div>

      <p className={styles.card__breakLine}></p>

      <div className={styles.card__features}>
        <div className={styles.card__names}>
          <p className={styles.card__info}>Screen</p>
          <p className={styles.card__info}>Capacity</p>
          <p className={styles.card__info}>RAM</p>
        </div>

        <div className={styles.card__chars}>
          <p className={styles.card__info}>{phone.screen}</p>
          <p className={styles.card__info}>{phone.capacity}</p>
          <p className={styles.card__info}>{phone.ram}</p>
        </div>
      </div>

      <Button_addToCart phone={phone} />
    </div>
  );
};
