import {CategoryCard} from '../CategoryCard';

import Phones from '../../assets/images/categories/phones.png';
import Tablets from '../../assets/images/categories/tablets.png';
import Accessoires from '../../assets/images/categories/accessoires.png';
import {Link} from 'react-router-dom';
import {memo} from 'react';

interface Props {
  phonesNumber: number;
}

export const ShopByCategory: React.FC<Props> = memo(({phonesNumber}) => {
  return (
    <section className="shop-by-category" id="shopByCategory">
      <div className="">
        <h2 className="shop-by-category__title">Shop by category</h2>

        <div className="grid grid--tablet grid--desktop">
          <div
            className="
                shop-by-category__item
                grid__item
                grid__item--tablet-1-4
                grid__item--desktop-1-8">
            <Link to="/phones">
              <CategoryCard
                imageUrl={Phones}
                imageAlt="Mobile phones category"
                categoryName="Mobile phones"
                numOfModels={`${phonesNumber} models`}
                categoryLink="/#/phones"
              />
            </Link>
          </div>

          <div
            className="
                shop-by-category__item
                grid__item
                grid__item--tablet-5-8
                grid__item--desktop-9-16">
            <Link to="/tablets">
              <CategoryCard
                imageUrl={Tablets}
                imageAlt="Tablets category"
                categoryName="Tablets"
                numOfModels="5 models"
                categoryLink="#"
              />
            </Link>
          </div>

          <div
            className="
                shop-by-category__item
                grid__item
                grid__item--tablet-9-12
                grid__item--desktop-17-24">
            <Link to="/accessories">
              <CategoryCard
                imageUrl={Accessoires}
                imageAlt="Accessories category"
                categoryName="Accessories"
                numOfModels="0 models"
                categoryLink="#"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

ShopByCategory.displayName = 'ShopByCategory';
