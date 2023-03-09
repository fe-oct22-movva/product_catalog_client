import './Tabltes.scss';
import React, {useEffect, useState} from 'react';
import {Breadcrumbs} from '../../components/Breadcrumbs';
import styles from '../MobilePhones/MobilePhones.module.scss';
import {ProductCardSingle} from '../../components/ProductCardSingle';
import {Tablet} from '../../types/types';
import {getTablets} from '../../api/phones';

export const Tablets = () => {
  const [tablets, setTablets] = useState<Tablet[]>([]);

  useEffect(() => {
    getTablets().then(setTablets);
  }, []);

  return (
    <div className="tablets">
      <head>
        <title>Mobile phones</title>
      </head>

      <div className="main-container">
        <Breadcrumbs />
        <h1 className="tablets__title">Tablets</h1>

        <p className="tablets__counter">5 tablets</p>

        <div className={styles.catalog}>
          {tablets.map((tablet) => (
            <div key={tablet.id} className={styles.catalog__item}>
              <ProductCardSingle
                id={String(tablet.id)}
                img={tablet.image}
                name={tablet.name}
                price={tablet.price}
                screen={tablet.screen}
                capacity={tablet.capacity}
                ram={tablet.ram}
                fullPrice={tablet.fullPrice}
                phoneId={tablet.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
