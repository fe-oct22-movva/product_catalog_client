// noinspection JSUnusedGlobalSymbols

import React from 'react';
import Slider from 'react-slick';
import './styles/banner.scss';
import './styles/slider.scss';
import '../../styles/grid.scss';
import banner_first from '../../assets/images/banner.jpg';
import banner_second from '../../assets/images/banner-phones.png';
import banner_third from '../../assets/images/banner-tablets.png';

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: '14px',
          height: '4px',
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="banner">
      <div className="banner-container">
        <div className="grid grid--tablet grid--desktop">
          <h1 className="banner__title grid__item grid__item--tablet-1-9 grid__item--desktop-1-24">
            Welcome to Nice Gadgets store!
          </h1>

          <Slider
            className="grid__item grid__item--tablet-2-11 grid__item--desktop-2-23"
            {...settings}>
            <img
              className="banner__image banner__image--first"
              src={banner_first}
              alt="Banner"
            />

            <img
              className="banner__image banner__image--second"
              src={banner_second}
              alt="Banner"
            />

            <img
              className="banner__image banner__image--third"
              src={banner_third}
              alt="Banner"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};
