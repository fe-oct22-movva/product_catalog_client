import React from 'react';
import './Cards.scss';

import whiteMobile from './images/white.jpg';
import purpleMobile from './images/purple.jpg';
import goldMobile from './images/gold.jpg';
import redMobile from './images/red.jpg';
import { ProductCardSingle } from '../ProductCardSingle';
import { ArrowLeft } from '../ArrowLeft';
import { ArrowRight } from '../ArrowRight';

export const Cards: React.FC = () => {
  return (
    <section className="page__section page__section-scroll">
      <div className="scroll">
        <h2 className="scroll__title">Brand new models</h2>

        <div className="scroll__block">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>

      <div className="grid">
        <div className="grid__item--desktop-1-6">
          <ProductCardSingle
            imgUrl={whiteMobile}
          />
        </div>

        <div className="grid__item--desktop-7-12">
          <ProductCardSingle
            imgUrl={purpleMobile}
          />
        </div>

        <div className="grid__item--desktop-13-18">
          <ProductCardSingle
            imgUrl={goldMobile}
          />
        </div>

        <div className="grid__item--desktop-19-24">
          <ProductCardSingle
            imgUrl={redMobile}
          />
        </div>
      </div>
    </section>
  );
};
