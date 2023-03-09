/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import styles from './MobilePhones.module.scss';

import {Pagination} from '../../components/Pagination';
import {ProductCardSingle} from '../../components/ProductCardSingle';
import {SortBy} from '../../components/SortBy/SortBy';
import {ItemsOnPage} from '../../components/ItemsOnPage/ItemsOnPage';
import {Phone} from '../../types/types';
import {getAllPhones} from '../../api/phones';
import {Breadcrumbs} from '../../components/Breadcrumbs';
import {Loader} from '../../components/Loader';
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import { usePageParams } from '../../controllers/usePageParams';

export const MobilePhones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesNumber, setPhonesNumber] = useState(0);
  const [pagesNumber, setPagesNumber] = useState(0);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isItemsOnPageOpen, setItemsOnPageOpen] = useState(false);
  const [arePhonesLoading, setArePhonesLoading] = useState(false);

  const [sortBy, perPage, currentPage] = usePageParams();

  useEffect(() => {
    setArePhonesLoading(true);

    getAllPhones([
      ['limit', perPage.toString()],
      ['sortBy', sortBy],
      ['page', currentPage.toString()],
    ])
      .then((data) => {
        setPhones(data.result);
        setPhonesNumber(data.totalPhones);
        setPagesNumber(data.pages);
      })
      .catch((error) => {
        console.log(error);
        Notify.failure('Oops, something went wrong. Please try again later.');
      })
      .finally(() => setArePhonesLoading(false));
  }, [
    sortBy,
    perPage,
    currentPage
  ]);

  const changeSortbyStatus = () => {
    setIsSortByOpen(!isSortByOpen);
    setItemsOnPageOpen(false);
  };

  const changeItemsOnPageStatus = () => {
    setItemsOnPageOpen(!isItemsOnPageOpen);
    setIsSortByOpen(false);
  };

  const sortByOptions = [
    ['newest', 'Newest'],
    ['oldest', 'Oldest'],
    ['alphabetically', 'Alphabetically'],
    ['cheapest', 'Cheapest'],
    ['moreExpensive', 'More expensive'],
  ];

  return (
    <>
      <head>
        <title>Mobile phones</title>
      </head>

      <div className="main-container">
        <Breadcrumbs />
        <div className={styles.phonesCategory}>
          <h1 className={styles.phonesCategory__title}>Mobile phones</h1>

          {arePhonesLoading ? (
            <Loader />
          ) : (
            <>
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
                    options={sortByOptions}
                    isSortByOpen={isSortByOpen}
                    setIsSortByOpen={setIsSortByOpen}
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
                    defaultValue={perPage}
                    isItemsOnPageOpen={isItemsOnPageOpen}
                    setItemsOnPageOpen={setItemsOnPageOpen}
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

              {phonesNumber > 0 && (
                <Pagination pagesNumber={pagesNumber} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
