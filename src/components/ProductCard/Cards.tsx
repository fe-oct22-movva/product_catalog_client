import React, {useEffect, useState} from 'react';
import './Cards.scss';

import arrowLeft from './images/arrowLeftDef.png';
import arrowRight from './images/arrowRigthDef.png';
import goldMobile from './images/gold.jpg';
import imgLike from './images/likeEmpty.png';
import purpleMobile from './images/purple.jpg';
import redMobile from './images/red.jpg';
import yellowLike from './images/Unionyellow.png';
import whiteMobile from './images/white.jpg';

export const Cards: React.FC = () => {
  const [like, setLike] = useState(false);
  const [position, setPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const styles = {
    transform: `translate(${position}px)`,
    transition: 'transform 0.3s',
  };

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth >= 1200) {
      setCardWidth(290);
    }

    if (windowWidth < 1200) {
      setCardWidth(248);
    }

    if (windowWidth < 640) {
      setCardWidth(220);
    }
  }, []);

  const handeLike = () => {
    setLike(!like);
  };

  return (
    <section className="page__section page__section-scroll">
      <div className="scroll">
        <h2 className="scroll__title">Brand new models</h2>

        <div className="scroll__block">
          <button
            className="scroll__left"
            onClick={() => setPosition((prev) => prev + cardWidth)}>
            <img src={arrowLeft} alt="arrow" className="scroll__icon" />
          </button>
          <button
            className="scroll__right"
            onClick={() => setPosition((prev) => prev - cardWidth)}>
            <img src={arrowRight} alt="arrow" className="scroll__icon" />
          </button>
        </div>
      </div>

      <div className="flex" style={styles}>
        <div className="card">
          <img className="card__icon" src={whiteMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </h3>

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
              <a className="button__like" onClick={handeLike}>
                {like === false ? (
                  <img src={imgLike} alt="Like" />
                ) : (
                  <img src={yellowLike} alt="Like" />
                )}
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__icon" src={purpleMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
          </h3>

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
              <a className="button__like" onClick={handeLike}>
                {like === false ? (
                  <img src={imgLike} alt="Like" />
                ) : (
                  <img src={yellowLike} alt="Like" />
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card__icon" src={purpleMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
          </h3>

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
              <a className="button__like" onClick={handeLike}>
                {like === false ? (
                  <img src={imgLike} alt="Like" />
                ) : (
                  <img src={yellowLike} alt="Like" />
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card__icon" src={purpleMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
          </h3>

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
              <a className="button__like" onClick={handeLike}>
                {like === false ? (
                  <img src={imgLike} alt="Like" />
                ) : (
                  <img src={yellowLike} alt="Like" />
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card__icon" src={purpleMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
          </h3>

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
              <a className="button__like" onClick={handeLike}>
                {like === false ? (
                  <img src={imgLike} alt="Like" />
                ) : (
                  <img src={yellowLike} alt="Like" />
                )}
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__icon" src={goldMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Pro 128GB Gold (MQ083)
          </h3>

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
                <img src={imgLike} className="button-icon" alt="Like" />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__icon" src={redMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)
          </h3>

          <p className="card__price">$859</p>

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
              href="src/components/ProductCard#addToCart">
              Add to cart
            </a>

            <div className="button">
              <a className="button__like">
                <img src={imgLike} className="button-icon" alt="Like" />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="card__icon" src={redMobile} />

          <h3 className="card__title">
            Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)
          </h3>

          <p className="card__price">$859</p>

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
              href="src/components/ProductCard#addToCart">
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
    </section>
  );
};
