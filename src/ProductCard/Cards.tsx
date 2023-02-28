import React, {useState} from 'react';
import './Cards.scss';

import whiteMobile from '../ProductCard/images/white.jpg';
import purpleMobile from '../ProductCard/images/purple.jpg';
import goldMobile from '../ProductCard/images/gold.jpg';
import redMobile from '../ProductCard/images/red.jpg';
import imgLike from '../ProductCard/images/likeEmpty.png';
import arrowRight from '../ProductCard/images/arrowRigthDef.png';
import arrowLeft from '../ProductCard/images/arrowLeftDef.png';
import yellowLike from '../ProductCard/images/Unionyellow.png';

export const Cards: React.FC = () => {
  const [like, setLike] = useState(false);

  const handeLike = () => {
    setLike(!like);
  };

  return (
    <section className="page__section">
      <div className="container">
        <div className="scroll">
          <h2 className="scroll__title">Brand new models</h2>

          <div className="scroll__block">
            <a className="scroll__left">
              <img src={arrowLeft} alt="arrow" className="scroll__icon" />
            </a>
            <a className="scroll__right">
              <img src={arrowRight} alt="arrow" className="scroll__icon" />
            </a>
          </div>

        </div>

        <div className="grid">
          <div className="grid__item--desktop-1-6">
            <div className="card">
              <img
                className="card__icon"
                src={whiteMobile}
              />

              <h3 className="card__title">
                Apple iPhone 14 Pro 128GB Silver (MQ023)
              </h3>

              <p className="card__price">
                $999
              </p>

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
                  href="#addToCart"

                >
                  Add to cart
                </a>

                <div className="button">
                  <a className="button__like" onClick={handeLike}>
                    {like === false
                      ? <img src={imgLike} alt="Like" />
                      : <img src={yellowLike} alt="Like" />}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid__item--desktop-7-12">
            <div className="card">
              <img
                className="card__icon"
                src={purpleMobile}
              />

              <h3 className="card__title">
                Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
              </h3>

              <p className="card__price">
                $999
              </p>

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
                  href="#addToCart"

                >
                  Add to cart
                </a>

                <div className="button">
                  <a className="button__like" onClick={handeLike}>
                    {like === false
                      ? <img src={imgLike} alt="Like" />
                      : <img src={yellowLike} alt="Like" />}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid__item--desktop-13-18">
            <div className="card">
              <img
                className="card__icon"
                src={goldMobile}
              />

              <h3 className="card__title">
                Apple iPhone 14 Pro 128GB Gold (MQ083)
              </h3>

              <p className="card__price">
                $999
              </p>

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
                  href="#addToCart"

                >
                  Add to cart
                </a>

                <div className="button">
                  <a className="button__like">
                    <img src={imgLike} className="button-icon" alt="Like" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid__item--desktop-19-24">
            <div className="card">
              <img
                className="card__icon"
                src={redMobile}
              />

              <h3 className="card__title">
                Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)
              </h3>

              <p className="card__price">
                $859
              </p>

              <p className="card__break-line"></p>

              <div className="card__features">
                <div className="card__names">
                  <p className="card__info">Screen</p>
                  <p className="card__info">Capacity</p>
                  <p className="card__info">RAM</p>
                </div>

                <div className="card__chars">
                  <p className="card__info">6.7” OLED</p>
                  <p className="card__info">128 GB</p>
                  <p className="card__info">6 GB</p>
                </div>
              </div>

              <div className="card__link">
                <a
                  className="card__button"
                  href="#addToCart"

                >
                  Add to cart
                </a>

                <div className="button">
                  <a className="button__like">
                    <img src={imgLike} className="button-icon" alt="Like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};