import React, {useEffect, useState} from 'react';
import styles from './MobilePhones.module.scss';

import whiteMobile from '../../assets/images/phones/white.jpg';
import purpleMobile from '../../assets/images/phones/purple.jpg';
import goldMobile from '../../assets/images/phones/gold.jpg';
import redMobile from '../../assets/images/phones/red.jpg';
import {ProductCardSingle} from '../../components/ProductCardSingle';
import {Pagination} from '../../components/Pagination';
import {getPhones} from '../../api/phones';
import {Phone} from '../../types/types';

export const MobilePhones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then((data) => setPhones(data.result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className={`${styles.phonesCategory} `}>
        <h1 className={styles.phonesCategory__title}>Mobile phones</h1>
        <p className={styles.phonesCategory__description}>95 models</p>

        <div className={`${styles.filter} grid grid--tablet grid--desktop`}>
          <div
            className={`
          ${styles.filter__sortBy}
          grid__item
          grid__item--tablet-1-4 
          grid__item--desctop-1-4
        `}>
            <p className={styles.filter__sortBy__description}>Sort by</p>

            <div className={styles.dropdown}>
              <button className={styles.dropdown__header}>
                <div className={styles.dropdown__title}>Newest</div>
              </button>

              <div className={styles.dropdown__items}>
                <button className={styles.dropdown__option}>Newest</button>
                <button className={styles.dropdown__option}>
                  Lowest price
                </button>
                <button className={styles.dropdown__option}>
                  Highest price
                </button>
              </div>
            </div>
          </div>

          <div
            className={`
          ${styles.filter__sortBy}
          grid__item
          grid__item--tablet-5-7 
          grid__item--desctop-57

        `}>
            <p className={styles.filter__sortBy__description}>Items on page</p>

            <div className={styles.dropdown}>
              <button className={styles.dropdown__header}>
                <div className={styles.dropdown__title}>16</div>
              </button>

              <div className={styles.dropdown__items}>
                <button className={styles.dropdown__option}>16</button>
                <button className={styles.dropdown__option}>20</button>
                <button className={styles.dropdown__option}>24</button>
              </div>
            </div>
          </div>
        </div>

      <div className={styles.catalog}>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={goldMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={purpleMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={redMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={whiteMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={goldMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={purpleMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={redMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={whiteMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={goldMobile}
          />
        </div>
        <div className={styles.catalog__item}>
          <ProductCardSingle
            imgUrl={purpleMobile}
          />
        </div>
      </div>

        <Pagination />
      </div>
    </div>
  );
};
