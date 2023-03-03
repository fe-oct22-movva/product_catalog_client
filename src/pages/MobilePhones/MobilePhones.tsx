import styles from './MobilePhones.module.scss';

import React, {useEffect, useState} from 'react';
import {Pagination} from '../../components/Pagination';
import {ProductCardSingle} from '../../components/ProductCardSingle';

import {Phone} from '../../types/types';
import {SortBy} from '../../components/SortBy/SortBy';
import {ItemsOnPage} from '../../components/ItemsOnPage/ItemsOnPage';
import {getPhones} from '../../api/phones';

export const MobilePhones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(data => setPhones(data.result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-container">
      <div className={`${styles.phonesCategory} `}>
        <h1 className={styles.phonesCategory__title}>Mobile phones</h1>
        <p className={styles.phonesCategory__description}>95 models</p>

        <div
          className={`${styles.filter} grid grid--mobile grid--tablet grid--desktop`}>
          <SortBy />

          <ItemsOnPage />
        </div>

        <div className={styles.catalog}>
          <div className={styles.catalog__item}>
            {phones.map((phone) => {
              return (
                <ProductCardSingle
                  id={phone.id}
                  key={phone.id}
                  imgUrl={phone.image}
                  name={phone.name}
                  price={phone.price}
                  screen={phone.screen}
                  capacity={phone.capacity}
                  ram={phone.ram}
                />
              );
            })}
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
};
