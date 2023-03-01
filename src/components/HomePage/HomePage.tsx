import {Banner} from '../Banner';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';
import {PhoneSpecs} from '../PhoneSpecs/PhoneSpecs';
import {AboutPhone} from '../AboutPhone';
import { MobilePhones } from '../../pages/MobilePhones';

export const HomePage = () => {
  return (
    <div className="homa-page_container">
      <Banner />
      <Cards />
      <ShopByCategory />
      <PhoneSpecs />
      <AboutPhone />
      <MobilePhones />
    </div>
  );
};
