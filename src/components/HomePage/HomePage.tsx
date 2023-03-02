import {Banner} from '../Banner';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';
import {PhoneSpecs} from '../PhoneSpecs/PhoneSpecs';
import {AboutPhone} from '../AboutPhone';

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="main-container">
        <Cards />
        <ShopByCategory />
        <PhoneSpecs />
        <AboutPhone />
      </div>
    </div>
  );
};
