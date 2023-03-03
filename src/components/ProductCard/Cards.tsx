import React, { useEffect, useState } from 'react';
import './Cards.scss';

import gold from '../../assets/images/phones/gold.jpg';
import { CardHomePage } from './CardHomePage';
import arrowLeft from './images/arrowLeftDef.png';
import arrowRight from './images/arrowRigthDef.png';

export const Cards: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardCount, setCardCount] = useState(0);
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

  return (
    <section className="page__section page__section-scroll">
      <div className="scroll">
        <h2 className="scroll__title">Brand new models</h2>

        <div className="scroll__block">
          <button
            className="scroll__left"
            onClick={() => {
              if (cardCount > 0) {
                setPosition((prev) => prev + cardWidth);
                setCardCount((prev) => prev - 1);
              }
            }}>
            <img src={arrowLeft} alt="arrow" className="scroll__icon" />
          </button>
          <button
            className="scroll__right"
            onClick={() => {
              if (cardCount < 4) {
                setPosition((prev) => prev - cardWidth);
                setCardCount((prev) => prev + 1);
              }
            }}>
            <img src={arrowRight} alt="arrow" className="scroll__icon" />
          </button>
        </div>
      </div>

      <div className="flex" style={styles}>

        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />
        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />

        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />

        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />

        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />

        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />

        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />

        <CardHomePage
          img={gold}
          name={' Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)'}
          price={'$859'}
          screen={'6.7” OLED'}
          capacity={'128 GB'}
          ram={'6 GB'}
        />
      </div>
    </section>
  );
};
