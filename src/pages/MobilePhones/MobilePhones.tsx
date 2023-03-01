import React from 'react';
import styles from './MobilePhones.module.scss';
import './Cards.scss';

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
      <div className={`${styles.catalog__item} card`}>
        <img className="card__icon" src="#" />

        <h3 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083)</h3>

        <p className="card__price">$999</p>

        <p className="card__break-line"></p>

        <div className="card__features">
          <div className="card__names">
            <p className="card__info">Screen</p>
            <p className="card__info">Capacity</p>
            <p className="card__info">RAM</p>
          </div>

          <div className="card__chars">
            <p className="card__info">6.1” OLED</p>
            <p className="card__info">128 GB</p>
            <p className="card__info">6 GB</p>
          </div>
        </div>

        <div className="card__link">
          <a
            className="card__button"
            href="src/components/ProductCard#addToCart">
            Add to cart
          </a>

          <div className="button">
            <a className="button__like">
              <img src="#" className="button-icon" alt="Like" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.catalog__item} card`}>
        <img className="card__icon" src="#" />

        <h3 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083)</h3>

        <p className="card__price">$999</p>

        <p className="card__break-line"></p>

        <div className="card__features">
          <div className="card__names">
            <p className="card__info">Screen</p>
            <p className="card__info">Capacity</p>
            <p className="card__info">RAM</p>
          </div>

          <div className="card__chars">
            <p className="card__info">6.1” OLED</p>
            <p className="card__info">128 GB</p>
            <p className="card__info">6 GB</p>
          </div>
        </div>

        <div className="card__link">
          <a
            className="card__button"
            href="src/components/ProductCard#addToCart">
            Add to cart
          </a>

          <div className="button">
            <a className="button__like">
              <img src="#" className="button-icon" alt="Like" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.catalog__item} card`}>
        <img className="card__icon" src="#" />

        <h3 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083)</h3>

        <p className="card__price">$999</p>

        <p className="card__break-line"></p>

        <div className="card__features">
          <div className="card__names">
            <p className="card__info">Screen</p>
            <p className="card__info">Capacity</p>
            <p className="card__info">RAM</p>
          </div>

          <div className="card__chars">
            <p className="card__info">6.1” OLED</p>
            <p className="card__info">128 GB</p>
            <p className="card__info">6 GB</p>
          </div>
        </div>

        <div className="card__link">
          <a
            className="card__button"
            href="src/components/ProductCard#addToCart">
            Add to cart
          </a>

          <div className="button">
            <a className="button__like">
              <img src="#" className="button-icon" alt="Like" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.catalog__item} card`}>
        <img className="card__icon" src="#" />

        <h3 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083)</h3>

        <p className="card__price">$999</p>

        <p className="card__break-line"></p>

        <div className="card__features">
          <div className="card__names">
            <p className="card__info">Screen</p>
            <p className="card__info">Capacity</p>
            <p className="card__info">RAM</p>
          </div>

          <div className="card__chars">
            <p className="card__info">6.1” OLED</p>
            <p className="card__info">128 GB</p>
            <p className="card__info">6 GB</p>
          </div>
        </div>

        <div className="card__link">
          <a
            className="card__button"
            href="src/components/ProductCard#addToCart">
            Add to cart
          </a>

          <div className="button">
            <a className="button__like">
              <img src="#" className="button-icon" alt="Like" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.catalog__item} card`}>
        <img className="card__icon" src="#" />

        <h3 className="card__title">Apple iPhone 14 Pro 128GB Gold (MQ083)</h3>

        <p className="card__price">$999</p>

        <p className="card__break-line"></p>

        <div className="card__features">
          <div className="card__names">
            <p className="card__info">Screen</p>
            <p className="card__info">Capacity</p>
            <p className="card__info">RAM</p>
          </div>

          <div className="card__chars">
            <p className="card__info">6.1” OLED</p>
            <p className="card__info">128 GB</p>
            <p className="card__info">6 GB</p>
          </div>
        </div>

        <div className="card__link">
          <a
            className="card__button"
            href="src/components/ProductCard#addToCart">
            Add to cart
          </a>

          <div className="button">
            <a className="button__like">
              <img src="#" className="button-icon" alt="Like" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.pagination}>Pagination Component</div>
  </div>
);
