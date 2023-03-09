import styles from '../ProductCardSingle/ProductCardSingle.module.scss';
import React, { memo } from 'react';

import {Button_addToCart} from '../Button_addToCart';
import {Link} from 'react-router-dom';

interface Props {
  id: string;
  img: string;
  name: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
  phoneId: string;
}

export const ProductCardSingle: React.FC<Props> = memo(
  ({
    id,
    img,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    phoneId,
  }) => {
    return (
      <div className={styles.card}>
        <Link to={phoneId} className={styles.card__icon}>
          <img className={styles.card__icon} src={img} />
        </Link>
  
        <h3 className={styles.card__title}>
          <Link to={phoneId} className={styles.card__link}>
            {name}
          </Link>
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
          img={img}
          price={price}
          name={name}
          screen={screen}
          capacity={capacity}
          ram={ram}
          fullPrice={fullPrice}
          phoneId={phoneId}
        />
      </div>
    );
  },
);

ProductCardSingle.displayName = 'ProductCardSingle';
