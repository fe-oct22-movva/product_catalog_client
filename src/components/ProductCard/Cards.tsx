import React, { useEffect, useState } from 'react';
import './Cards.scss';

import { CardHomePage } from './CardHomePage';
import arrowLeft from './images/arrowLeftDef.png';
import arrowRight from './images/arrowRigthDef.png';
import { Phone } from '../../types/types';
// import { ProductCardSingle } from '../ProductCardSingle';

interface Props {
  newestPhones: Phone[],
}

export const Cards: React.FC<Props> = ({ newestPhones }) => {
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
      setCardWidth(270 + 16);
    }

    if (windowWidth < 1200) {
      setCardWidth(248 + 16);
    }

    if (windowWidth < 640) {
      setCardWidth(220 + 16);
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
              if (cardCount < 6) {
                setPosition((prev) => prev - cardWidth);
                setCardCount((prev) => prev + 1);
              }
            }}>
            <img src={arrowRight} alt="arrow" className="scroll__icon" />
          </button>
        </div>
      </div>

      <div className="flex" style={styles}>
        {newestPhones.map((phone) => (
          <div key={phone.id} className="flex__item">

            {/* <ProductCardSingle
              id={phone.id}
              img={phone.image}
              name={phone.name}
              price={phone.price}
              fullPrice={phone.fullPrice}
              screen={phone.screen}
              capacity={phone.capacity}
              ram={phone.ram}
            /> */}

            <CardHomePage
              id={phone.id}
              img={phone.image}
              name={phone.name}
              price={phone.price}
              screen={phone.screen}
              capacity={phone.capacity}
              ram={phone.ram}
            />

          </div>
        ))}
      </div>
    </section>
  );
};
