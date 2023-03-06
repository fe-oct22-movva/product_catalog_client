import React, { useEffect, useState } from 'react';
import styles from './MobilePhones.module.scss';

import { Pagination } from '../../components/Pagination';
import { ProductCardSingle } from '../../components/ProductCardSingle';
import { SortBy } from '../../components/SortBy/SortBy';
import { ItemsOnPage } from '../../components/ItemsOnPage/ItemsOnPage';

import { Phone, SortTypes } from '../../types/types';
import { getAllPhones } from '../../api/phones';

export const MobilePhones: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesNumber, setPhonesNumber] = useState(0);
  const [selectedSortBy, setSelectedSortBy] = useState(SortTypes.NEWEST);
  const [selectedPhonesPerPage, setSelectedPhonesPerPage] = useState(12);
  const [pagesNumber, setPagesNumber] = useState(0);

  useEffect(() => {
    getAllPhones([
      ['limit', selectedPhonesPerPage.toString()],
      ['sort', selectedSortBy],
    ])
      .then((data) => {
        setPhones(data.result);
        setPhonesNumber(data.totalPhones);
        setPagesNumber(data.pages);
      })
      .catch((error) => console.log(error));
  }, [selectedSortBy, selectedPhonesPerPage]);

  return (
    <div className="main-container">
      <div className={`${styles.phonesCategory} `}>
        <h1 className={styles.phonesCategory__title}>Mobile phones</h1>
        <p className={styles.phonesCategory__description}>{phonesNumber} models</p>

        <div
          className={`${styles.filter} grid grid--mobile grid--tablet grid--desktop`}>
          <SortBy
            selectedSortBy={selectedSortBy}
            setSelectedSortBy={setSelectedSortBy}
          />

          <ItemsOnPage
            setSelectedPhonesPerPage={setSelectedPhonesPerPage}
          />
        </div>

        <div className={styles.catalog}>
          {phones.map((phone) => (
            <div key={phone.id} className={styles.catalog__item}>
              <ProductCardSingle
                phone={phone}
              />
            </div>
          ))}
        </div>
        
        <Pagination />
      </div>
    </div>
  );
};
