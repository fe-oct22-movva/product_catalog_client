/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react';
import './CardSpec.scss';

import Slider from 'react-slick';
import {getPhoneById} from '../../api/phones';
import {PhoneSpec} from '../../types/types';
import {Button_addToCart} from '../Button_addToCart';
import {Breadcrumbs} from '../Breadcrumbs';
import classNames from 'classnames';
import {checkerColor, checkerId, colorToHex} from '../../utils/helpers';
import {useNavigate, useParams} from 'react-router-dom';

export const CardSpec: React.FC = () => {
  const {phoneId = '0'} = useParams();

  const [phoneSpec, setPhoneSpec] = useState<PhoneSpec | null>(null);
  const [oldIdPhone, setOldIdPhone] = useState(phoneId);

  const pageHistory = useNavigate();

  useEffect(() => {
    getPhoneById(oldIdPhone)
      .then((response: any) => {
        setPhoneSpec(response);
      })
      .catch((error) => console.warn(error));
    if (oldIdPhone !== phoneId) {
      pageHistory(`/phones/${oldIdPhone}`);
    }
  }, [oldIdPhone, pageHistory]);

  if (phoneSpec === null) {
    return null;
  }

  const individualIdForPage = phoneId.split('-').slice(0, 3).join('-');

  const hadleClick = (memory: string) => {
    setOldIdPhone(checkerId(oldIdPhone, memory));
  };

  const hadleColor = (color: string) => {
    setOldIdPhone(checkerColor(oldIdPhone, color));
  };

  const listOfSpec = [
    {name: 'Screen', value: phoneSpec.screen},
    {name: 'Resolution', value: phoneSpec.resolution},
    {name: 'Processor', value: phoneSpec.processor},
    {name: 'RAM', value: phoneSpec.ram},
    {name: 'Built in memory', value: phoneSpec.capacity},
    {name: 'Camera', value: phoneSpec.camera},
    {name: 'Zoom', value: phoneSpec.zoom},
    {name: 'Cell', value: phoneSpec.cell},
  ];

  const phonePhotos = phoneSpec.images;

  const sliderSetting = {
    customPaging: (i = 0) => {
      return (
        <img
          className="slick-image"
          src={`https://raw.githubusercontent.com/fe-oct22-movva/images_for_product_catalog_api/master/${phonePhotos[i]}`}
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
            className="phone__specs-main__photos grid__item grid__item--tablet-2-7 grid__item--desktop-1-12"
            {...sliderSetting}>
            {phonePhotos.map((photo) => (
              <img
                className="phone__specs-main__photos-item"
                src={`https://raw.githubusercontent.com/fe-oct22-movva/images_for_product_catalog_api/master/${photo}`}
                alt="phone image"
                key={phonePhotos.indexOf(photo)}
              />
            ))}
          </Slider>

          <div className="phone__specs-main__feature grid__item grid__item--tablet-8-11 grid__item--desktop-13-19">
            <div className="phone__specs-main__feature__title">
              <h5 className="phone__specs-main__feature__title-available">
                Available colors
              </h5>

              <p className="phone__specs-main__feature__title-id">
                {individualIdForPage}
              </p>
            </div>

            <div className="phone__specs-main__feature__select">
              {phoneSpec.colorsAvailable.map((color) => (
                <button
                  className="color-selector"
                  color={color}
                  key={color}
                  onClick={() => hadleColor(color)}>
                  <div
                    className={classNames('color-selector__inside', {
                      color: color === phoneSpec.color,
                    })}
                    style={{backgroundColor: colorToHex(color)}}
                  />
                </button>
              ))}
            </div>

            <div className="phone__specs-main__feature__capacity">
              <p className="phone__specs-main__feature__capacity-title">
                Select capacity
              </p>

              <div className="phone__specs-main__feature__capacity-btn">
                {phoneSpec.capacityAvailable.map((memory) => (
                  <button
                    key={memory.toString()}
                    className={classNames(
                      'phone__specs-main__feature__capacity-btn__item',
                      {active: memory === phoneSpec.capacity}
                    )}
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
              <Button_addToCart
                id={''}
                img={''}
                price={0}
                name={''}
                fullPrice={0}
                screen={''}
                capacity={''}
                ram={''}
              />
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

      <div className="about grid grid--tablet grid--desktop">
        <div className="phone__specs-main__feature grid__item grid__item--desktop-1-10 grid__item--tablet-1-7">
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

        <div className="grid__item grid__item--desktop-13-24 grid__item--tablet-8-12">
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
  );
};
