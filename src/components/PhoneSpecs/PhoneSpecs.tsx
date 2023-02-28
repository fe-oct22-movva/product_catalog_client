// noinspection JSUnusedGlobalSymbols

import React from 'react';
import Slider from 'react-slick';
import './PhoneSpecs.scss';
import './PhoneSpecsSlider.scss';
import '../../styles/blocks/grid-shop-by.scss';
import {ColorSelector} from '../ColorSelector/ColorSelector';

export const PhoneSpecs = () => {
  const phoneFeature: React.CSSProperties[] = [
    {background: '#FCDBC1'},
    {background: '#5F7170'},
    {background: '#4C4C4C'},
    {background: '#F0F0F0'},
  ];

  const sliderSetting = {
    customPaging: (i = 0) => {
      return (
        <img
          className="slick-image"
          src={`src/images/phoneSpecs-gallery-${i}.jpg`}
          alt="phone image"/>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    draggable: true,
  };

  return (
    <article className="phone__specs">
      <h1 className="phone__specs-title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>
      <div className="phone__specs-main grid-shop-by grid-shop-by--tablet grid-shop-by--desktop">
        <Slider
          className="phone__specs-main__photos grid-shop-by__item grid-shop-by__item--tablet-1-7 grid-shop-by__item--desktop-1-12"
          {...sliderSetting}
        >
          <img
            className="phone__specs-main__photos-item"
            src="src/images/phoneSpecs-gallery-0.jpg"
            alt="phone image"
          />

          <img
            className="phone__specs-main__photos-item"
            src="src/images/phoneSpecs-gallery-1.jpg"
            alt="phone image"
          />

          <img
            className="phone__specs-main__photos-item"
            src="src/images/phoneSpecs-gallery-2.jpg"
            alt="phone image"
          />

          <img
            className="phone__specs-main__photos-item"
            src="src/images/phoneSpecs-gallery-3.jpg"
            alt="phone image"
          />

          <img
            className="phone__specs-main__photos-item"
            src="src/images/phoneSpecs-gallery-4.jpg"
            alt="phone image"
          />
        </Slider>

        <div className="phone__specs-main__feature grid-shop-by__item grid-shop-by__item--tablet-8-12 grid-shop-by__item--desktop-14-24">
          <div className="phone__specs-main__feature__title">
            <h5 className="phone__specs-main__feature__title-available">
                Available colors
            </h5>

            <p className="phone__specs-main__feature__title-id">
                ID: 802390
            </p>
          </div>

          <div className="phone__specs-main__feature__select">
            {
              phoneFeature.map(color => (
                <ColorSelector color={color} key={phoneFeature.indexOf(color)} />
              ))}
          </div>

          <div className="phone__specs-main__feature__capacity">
            <p className="phone__specs-main__feature__capacity-title">
              Select capacity
            </p>

            <div className="phone__specs-main__feature__capacity-btn">
              <button className="phone__specs-main__feature__capacity-btn__item">
                64 GB
              </button>
              <button className="phone__specs-main__feature__capacity-btn__item">
                256 GB
              </button>
              <button className="phone__specs-main__feature__capacity-btn__item">
                512 GB
              </button>
            </div>
          </div>

          <div className="phone__specs-main__feature__order">
            <div className="phone__specs-main__feature__order-price">
              <p className="phone__specs-main__feature__order-price--new">
                $799
              </p>

              <p className="phone__specs-main__feature__order-price--old">
                $1199
              </p>
            </div>

            <div className="phone__specs-main__feature__order-cart">
              <button className="phone__specs-main__feature__order-cart__add">
                Add to cart
              </button>

              <button className="phone__specs-main__feature__order-cart__favourite">
                <img
                  className="phone__specs-main__feature__order-cart__favourite-img"
                  src="src/assets/images/Favourites.svg"
                  alt="favourites"
                />
              </button>
            </div>

          </div>

          <div className="phone__specs-main__feature__characteristics">
            <div className="phone__specs-main__feature__characteristics-item">
              <p className="phone__specs-main__feature__characteristics-item__name">
                  Screen
              </p>

              <p className="phone__specs-main__feature__characteristics-item__value">
                  6.5” OLED
              </p>
            </div>

            <div className="phone__specs-main__feature__characteristics-item">
              <p className="phone__specs-main__feature__characteristics-item__name">
                  Resolution
              </p>

              <p className="phone__specs-main__feature__characteristics-item__value">
                  2688x1242
              </p>
            </div>

            <div className="phone__specs-main__feature__characteristics-item">
              <p className="phone__specs-main__feature__characteristics-item__name">
                  Processor
              </p>

              <p className="phone__specs-main__feature__characteristics-item__value">
                  Apple A12 Bionic
              </p>
            </div>

            <div className="phone__specs-main__feature__characteristics-item">
              <p className="phone__specs-main__feature__characteristics-item__name">
                  RAM
              </p>

              <p className="phone__specs-main__feature__characteristics-item__value">
                  3 GB
              </p>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};
