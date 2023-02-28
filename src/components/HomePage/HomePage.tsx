import {Cards} from '../../ProductCard';
import {Banner} from '../Banner/Banner';
import {ShopByCategory} from '../ShopByCategory';

export const HomePage = () => {
  return (
    <div className="page__body">
      <Banner />
      <Cards />
      <ShopByCategory />
    </div>
  );
};
