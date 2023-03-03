import React, {useEffect, useState} from 'react';
import styles from './MobilePhones.module.scss';

import {Pagination} from '../../components/Pagination';
import {ProductCardSingle} from '../../components/ProductCardSingle';
import {SortBy} from '../../components/SortBy/SortBy';
import {ItemsOnPage} from '../../components/ItemsOnPage/ItemsOnPage';

import {Phone} from '../../types/types';
import {getPhones} from '../../api/phones';
import {Breadcrumbs} from '../../components/Breadcrumbs';
import {CardHomePage} from '../../components/ProductCard/CardHomePage';

export const MobilePhones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesNumber, setPhonesNumber] = useState(0);
  const [selectedSortBy, setSelectedSortBy] = useState('Newest');
  const [selectedPhonesPerPage, setSelectedPhonesPerPage] = useState(12);
  const [pagesNumber, setPagesNumber] = useState(0);

  useEffect(() => {
    getPhones()
      .then((data) => {
        setPhones(data.result);
        setPhonesNumber(data.totalPhones);
        setPagesNumber(data.pages);
      })
      .catch((error) => console.log(error));
  }, [
    phones,
    phonesNumber,
    selectedSortBy,
    selectedPhonesPerPage,
    pagesNumber,
  ]);

  return (
    <div className="main-container">
      <Breadcrumbs />
      <div className={`${styles.phonesCategory} `}>
        <h1 className={styles.phonesCategory__title}>Mobile phones</h1>
        <p className={styles.phonesCategory__description}>
          {phonesNumber} models
        </p>

        <div
          className={`${styles.filter} grid grid--mobile grid--tablet grid--desktop`}>
          <SortBy setSelectedSortBy={setSelectedSortBy} />

          <ItemsOnPage setSelectedPhonesPerPage={setSelectedPhonesPerPage} />
        </div>

        <div className={styles.catalog}>
          <CardHomePage
            img="https://fe-oct22-movva.github.io/product_catalog_client/assets/gold-c923c67c.jpg"
            name={'Test product'}
            price={'$859'}
            screen={'6.7” OLED'}
            capacity={'128 GB'}
            ram={'6 GB'}
          />

          {phones.map((phone) => (
            <div key={phone.id} className={styles.catalog__item}>
              <ProductCardSingle
                img={phone.image}
                name={phone.name}
                price={phone.price}
                fullPrice={phone.fullPrice}
                screen={phone.screen}
                capacity={phone.capacity}
                ram={phone.ram}
              />
            </div>
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};
