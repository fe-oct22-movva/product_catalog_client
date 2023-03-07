/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react';
import './CardSpec.scss';

import Slider from 'react-slick';
import {ColorSelector} from '../ColorSelector/ColorSelector';
import {getPhoneById} from '../../api/phones';
import {PhoneSpec} from '../../types/types';
import {Button_addToCart} from '../Button_addToCart';
import {Breadcrumbs} from '../Breadcrumbs';

export type Props = {
  selectedId: string;
  startValue: string;
};

export const CardSpec: React.FC<Props> = ({selectedId, startValue}) => {
  const [phoneSpec, setPhoneSpec] = useState<PhoneSpec | null>(null);
  const [selectedMemory, setSelectedMemory] = useState(startValue);
  const [isActive, setIsActive] = useState(false);

  console.log(startValue);

  useEffect(() => {
    getPhoneById(selectedId)
      .then((response: any) => {
        setPhoneSpec(response);
      })
      .catch((error) => console.error(error));
  }, []);

  if (phoneSpec === null) {
    return phoneSpec;
  }

  const hadleClick = (memory: string) => {
    setSelectedMemory(memory), setIsActive(!isActive);
  };

  const toSelectMemory = phoneSpec.capacityAvailable.find(
    (el) => el === selectedMemory
  );

  const listOfSpec = [
    {name: 'Screen', value: phoneSpec.screen},
    {name: 'Resolution', value: phoneSpec.resolution},
    {name: 'Processor', value: phoneSpec.processor},
    {name: 'RAM', value: phoneSpec.ram},
    {name: 'Built in memory', value: toSelectMemory},
    {name: 'Camera', value: phoneSpec.camera},
    {name: 'Zoom', value: phoneSpec.zoom},
    {name: 'Cell', value: phoneSpec.cell},
  ];

  const phonePhotos = phoneSpec.images;

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
          src={phonePhotos[i].toString()}
          alt="phone image"
        />
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
    <div className="spec__page">
      <Breadcrumbs />

      <article className="phone__specs">
        <h1 className="phone__specs-title">{phoneSpec?.name}</h1>
        <div className="phone__specs-main grid grid--tablet grid--desktop">
          <Slider
            className="phone__specs-main__photos grid__item grid__item--tablet-1-7 grid__item--desktop-1-12"
            {...sliderSetting}>
            {phonePhotos.map((photo) => (
              <img
                className="phone__specs-main__photos-item"
                src={photo}
                alt="phone image"
                key={phonePhotos.indexOf(photo)}
              />
            ))}
          </Slider>

          <div className="phone__specs-main__feature grid__item grid__item--tablet-8-12 grid__item--desktop-14-24">
            <div className="phone__specs-main__feature__title">
              <h5 className="phone__specs-main__feature__title-available">
                {phoneSpec.colorsAvailable}
              </h5>

              <p className="phone__specs-main__feature__title-id">ID: 802390</p>
            </div>

            <div className="phone__specs-main__feature__select">
              {phoneFeature.map((color) => (
                <ColorSelector
                  color={color}
                  key={phoneFeature.indexOf(color)}
                />
              ))}
            </div>

            <div className="phone__specs-main__feature__capacity">
              <p className="phone__specs-main__feature__capacity-title">
                Select capacity
              </p>

              <div className="phone__specs-main__feature__capacity-btn">
                {phoneSpec.capacityAvailable.map((memory) => (
                  <button
                    key={phoneSpec.capacityAvailable.indexOf(memory)}
                    className="phone__specs-main__feature__capacity-btn__item"
                    onClick={() => hadleClick(memory)}>
                    {memory}
                  </button>
                ))}
              </div>
            </div>

            <div className="phone__specs-main__feature__order">
              <div className="phone__specs-main__feature__order-price">
                <p className="phone__specs-main__feature__order-price--new">
                  {`$${phoneSpec.priceDiscount}`}
                </p>

                <p className="phone__specs-main__feature__order-price--old">
                  {`$${phoneSpec.priceRegular}`}
                </p>
              </div>

              <div className="phone__specs-main__feature__order-cart ">
                {/* <button className="phone__specs-main__feature__order-cart__add">

                </button>

                <button className="phone__specs-main__feature__order-cart__favourite">
                  <img
                    className="phone__specs-main__feature__order-cart__favourite-img"
                    src={favourite}
                    alt="favourites"
                  />
                </button> */}
                <Button_addToCart
                  id={''}
                  img={''}
                  price={0}
                  name={''}
                  capacity={''}
                  fullPrice={2000}
                  ram={''}
                  screen={''}
                />
              </div>
            </div>

            <div className="phone__specs-main__feature__characteristics">
              {listOfSpec.slice(0, 4).map((spec) => (
                <div
                  className="phone__specs-main__feature__characteristics-item"
                  key={listOfSpec.indexOf(spec)}>
                  <p className="phone__specs-main__feature__characteristics-item__name">
                    {spec.name}
                  </p>

                  <p className="phone__specs-main__feature__characteristics-item__value">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <div className="about">
        <div className="grid grid--desktop">
          <div className="grid__item grid__item--desktop-1-10">
            <h2 className="about__header">About</h2>

            <div className="about__brake-line"></div>
            {phoneSpec.description.map((element) => (
              <>
                <h3
                  key={phoneSpec.description.indexOf(element)}
                  className="about__title">
                  {element.title}
                </h3>
                <section>
                  <div className="about__text">
                    {element.text.length <= 1 ? (
                      <p className="about__text-service">{element.text}</p>
                    ) : (
                      <>
                        <p className="about__text-service">{element.text[0]}</p>
                        <p className="about__text-service">{element.text[1]}</p>
                      </>
                    )}
                  </div>
                </section>
              </>
            ))}
          </div>

          <div className="grid__item grid__item--desktop-13-24">
            <section>
              <h3 className="about__title">Tech specs</h3>

              <div className="about__brake-line"></div>
              <div className="about__spec">
                <div className="about__spec-names">
                  {listOfSpec.map((el) => (
                    <p key={listOfSpec.indexOf(el)} className="about__info">
                      {el.name}
                    </p>
                  ))}
                </div>

                <div className="about__spec-specs">
                  {listOfSpec.map((el) => (
                    <p key={listOfSpec.indexOf(el)} className="about__info">
                      {el.value}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
