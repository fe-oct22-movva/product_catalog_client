import React from 'react';
import styles from './MobilePhones.module.scss';
import {ProductCardSingle} from '../../components/ProductCardSingle';

export const MobilePhones: React.FC = () => (
  <div className={styles.phonesCategory}>
    <h1 className={styles.phonesCategory__title}>Mobile phones</h1>
    <p className={styles.phonesCategory__description}>95 models</p>

    <div className={styles.filter}>
      <div className={styles.filter__sortBy}>
        <p className={styles.filter__sortBy__description}>Sort by</p>
        <div className={styles.filter__sortBy__dropdown}></div>
      </div>

      <div className={styles.filter__sortBy}>
        <p className={styles.filter__sortBy__description}>Items on page</p>
        <div className={styles.filter__sortBy__dropdown}></div>
      </div>
    </div>

    <div className={styles.catalog}>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
      <div className={styles.catalog__item}>
        <ProductCardSingle />
      </div>
    </div>

    <div className={styles.pagination}>Pagination Component</div>
  </div>
);
