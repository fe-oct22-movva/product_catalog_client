import './Favourites.scss';
import {Cards} from '../ProductCard';
import {ProductCardSingle} from '../ProductCardSingle';
import whiteMobile from '../../assets/images/phones/white.jpg';
import purpleMobile from '../../assets/images/phones/purple.jpg';
import goldMobile from '../../assets/images/phones/gold.jpg';
import redMobile from '../../assets/images/phones/red.jpg';

export const Favourites = () => {
  return (
    <div className="main-container">
      <section className="favourites">
        <h1 className="favourites__title">
          Favourites
        </h1>

        <h3 className="favourites__subtitle">
          5 items
        </h3>

        <div className="favourites__items">
          <div className="favourites__item">
            <ProductCardSingle imgUrl={goldMobile} />
          </div>

          <div className="favourites__item">
            <ProductCardSingle imgUrl={purpleMobile} />
          </div>

          <div className="favourites__item">
            <ProductCardSingle imgUrl={redMobile} />
          </div>

          <div className="favourites__item">
            <ProductCardSingle imgUrl={whiteMobile} />
          </div>

          <div className="favourites__item">
            <ProductCardSingle imgUrl={goldMobile} />
          </div>
        </div>
      </section>
    </div>
  );
};
