import './Tabltes.scss';
import React, {memo, useEffect, useState} from 'react';
import {Breadcrumbs} from '../../components/Breadcrumbs';
import styles from '../MobilePhones/MobilePhones.module.scss';
import {ProductCardSingle} from '../../components/ProductCardSingle';
import {Tablet} from '../../types/types';
import {getTablets} from '../../api/phones';
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {Loader} from '../../components/Loader';

export const Tablets: React.FC = memo(() => {
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [areTabletsLoading, setAreTabletsLoading] = useState(false);

  useEffect(() => {
    setAreTabletsLoading(true);

    getTablets()
      .then(setTablets)
      .catch((error) => {
        console.log(error);
        Notify.failure('Oops, something went wrong. Please try again later.');
      })
      .finally(() => setAreTabletsLoading(false));
  }, []);

  return (
    <div className="tablets">
      <head>
        <title>Tablets</title>
      </head>

      <div className="main-container">
        <Breadcrumbs />
        <h1 className="tablets__title">Tablets</h1>

        {areTabletsLoading ? (
          <Loader />
        ) : (
          <>
            <p className="tablets__counter">{tablets.length} tablets</p>

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
                    phoneId='tablet-page'
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

Tablets.displayName = 'Tablets';
