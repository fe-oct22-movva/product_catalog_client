import { Banner } from '../Banner';
import { Cards } from '../ProductCard';
import { ShopByCategory } from '../ShopByCategory';

export const HomePage = () => {
  return (
    <div className="homa-page_container">
      <Banner />
      <Cards />
      <ShopByCategory />
    </div>
  );
};
