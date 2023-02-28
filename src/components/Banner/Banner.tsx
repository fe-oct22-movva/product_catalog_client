// noinspection JSUnusedGlobalSymbols

import React from 'react';
import Slider from 'react-slick';
import './styles/banner.scss';
import '../../styles/grid.scss';


export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    draggable: true,
    customPaging: () => (
      <div className="slick-dot"
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
        }
      },
    ]
  };

  return (
    <section className="banner">
      <div className="grid grid--responsive">
        <h1
          className="banner__title grid--responsive--tablet--1-9"
        >
          Welcome to Nice Gadgets store!
        </h1>

        <Slider
          className="grid--responsive--tablet--2-11 grid--responsive--desktop--2-23"
          {...settings}
        >
          <img
            className="banner__image"
            src="src/images/banner.jpg"
            alt="Banner"
          />

          <img
            className="banner__image"
            src="src/images/banner.jpg"
            alt="Banner"
          />

          <img
            className="banner__image"
            src="src/images/banner.jpg"
            alt="Banner"
          />
        </Slider>
      </div>
    </section>
  );
};

