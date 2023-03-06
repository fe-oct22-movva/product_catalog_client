/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import styles from './MobilePhones.module.scss';

import {Pagination} from '../../components/Pagination';
import {ProductCardSingle} from '../../components/ProductCardSingle';
import {SortBy} from '../../components/SortBy/SortBy';
import {ItemsOnPage} from '../../components/ItemsOnPage/ItemsOnPage';

import {Phone, SortTypes} from '../../types/types';
import {getAllPhones} from '../../api/phones';
import {Breadcrumbs} from '../../components/Breadcrumbs';

export const MobilePhones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesNumber, setPhonesNumber] = useState(0);
  const [selectedSortBy, setSelectedSortBy] = useState(SortTypes.NEWEST);
  const [selectedPhonesPerPage, setSelectedPhonesPerPage] = useState(12);
  const [pagesNumber, setPagesNumber] = useState(0);

  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isItemsOnPageOpen, setItemsOnPageOpen] = useState(false);

  console.log(phones);

  useEffect(() => {
    getAllPhones([
      ['limit', selectedPhonesPerPage.toString()],
      ['sortBy', selectedSortBy],
    ])
      .then((data) => {
        console.log(data);
        setPhones(data.result);
        setPhonesNumber(data.totalPhones);
        setPagesNumber(data.pages);
      })
      .catch((error) => console.log(error));
  }, [selectedSortBy, selectedPhonesPerPage]);

  const changeSortbyStatus = () => {
    setIsSortByOpen(!isSortByOpen);
    setItemsOnPageOpen(false);
  };

  const changeItemsOnPageStatus = () => {
    setItemsOnPageOpen(!isItemsOnPageOpen);
    setIsSortByOpen(false);
  };

  return (
    <div className="main-container">
      <Breadcrumbs />
      <div className={styles.phonesCategory}>
        <h1 className={styles.phonesCategory__title}>Mobile phones</h1>
        <p className={styles.phonesCategory__description}>
          {phonesNumber} models
        </p>

        <div
          className={`${styles.filter} grid grid--mobile grid--tablet grid--desktop`}>
          <div
            className={`
            ${styles.filter__container} 
            grid__item--mobile-1-2
            grid__item--tablet-1-4 
            grid__item--desctop-1-4
          `}
            onClick={changeSortbyStatus}>
            <SortBy
              setSelectedSortBy={setSelectedSortBy}
              isSortByOpen={isSortByOpen}
            />
          </div>

          <div
            className={`
            ${styles.filter__container} 
            grid__item--mobile-3-4
            grid__item--tablet-5-7 
            grid__item--desctop-5-7
          `}
            onClick={changeItemsOnPageStatus}>
            <ItemsOnPage
              setSelectedPhonesPerPage={setSelectedPhonesPerPage}
              isItemsOnPageOpen={isItemsOnPageOpen}
            />
          </div>
        </div>

        <div className={styles.catalog}>
          {phones.map((phone) => (
            <div key={phone.id} className={styles.catalog__item}>
              <ProductCardSingle
                id={phone.id}
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
