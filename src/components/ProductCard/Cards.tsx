import React, {useEffect, useState} from 'react';
import './Cards.scss';

import {CardHomePage} from './CardHomePage';
import {Phone} from '../../types/types';

interface Props {
  newestPhones: Phone[];
  setSelectedId: (newId: string) => void;
  title: string;
}

export const Cards: React.FC<Props> = ({
  newestPhones,
  setSelectedId,
  title,
}) => {
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
        <h2 className="scroll__title">{title}</h2>

        <div className="scroll__block">
          <button
            className="scroll__left"
            onClick={() => {
              if (cardCount > 0) {
                setPosition((prev) => prev + cardWidth);
                setCardCount((prev) => prev - 1);
              }
            }}></button>
          <button
            className="scroll__right"
            onClick={() => {
              if (cardCount < 6) {
                setPosition((prev) => prev - cardWidth);
                setCardCount((prev) => prev + 1);
              }
            }}></button>
        </div>
      </div>

      <div className="flex" style={styles}>
        {newestPhones.map((phone) => (
          <div key={phone.id} className="flex__item">
            <CardHomePage
              id={phone.id}
              img={phone.image}
              name={phone.name}
              price={phone.price}
              fullPrice={phone.fullPrice}
              screen={phone.screen}
              capacity={phone.capacity}
              ram={phone.ram}
              phoneId={phone.phoneId}
              setSelectedId={setSelectedId}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
