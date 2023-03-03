import './Favourites.scss';
import {ProductCardSingle} from '../ProductCardSingle';
import goldMobile from '../../assets/images/phones/gold.jpg';

export const Favourites = () => {
  return (
    <div className="main-container">
      <section className="favourites">
        <h1 className="favourites__title">Favourites</h1>

        <h3 className="favourites__subtitle">5 items</h3>

        <div className="favourites__items">
          <div className="favourites__item">
            <ProductCardSingle imgUrl={goldMobile} capacity="256 Gb" name="Apple iphone pro 14" price="999$" ram="6 Gb" screen="6.5 OLED" />
          </div>
        </div>
      </section>
    </div>
  );
};
