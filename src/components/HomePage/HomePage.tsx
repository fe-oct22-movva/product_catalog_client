import {Banner} from '../Banner';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';
import {PhoneSpecs} from '../PhoneSpecs/PhoneSpecs';
import {AboutPhone} from '../AboutPhone';

interface Props {
  isBurgerActivated: boolean,
  setIsBurgerActivated: React.Dispatch<React.SetStateAction<boolean>>
}

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
