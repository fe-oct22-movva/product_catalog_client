import {CategoryCard} from '../CategoryCard';

import Phones from '../../assets/images/categories/phones.png';
import Tablets from '../../assets/images/categories/tablets.png';
import Accessoires from '../../assets/images/categories/accessoires.png';

interface Props {
  phonesNumber: number;
}

export const ShopByCategory: React.FC<Props> = ({ phonesNumber }) => {
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
            <a href="/#/phones">
              <CategoryCard
                imageUrl={Phones}
                imageAlt="Mobile phones category"
                categoryName="Mobile phones"
                numOfModels={`${phonesNumber} models`}
                categoryLink="/#/phones"
              />
            </a>
          </div>

          <div
            className="
              shop-by-category__item
              grid__item
              grid__item--tablet-5-8
              grid__item--desktop-9-16">
            <CategoryCard
              imageUrl={Tablets}
              imageAlt="Tablets category"
              categoryName="Tablets"
              numOfModels="0 models"
              categoryLink="#"
            />
          </div>

          <div
            className="
              shop-by-category__item
              grid__item
              grid__item--tablet-9-12
              grid__item--desktop-17-24">
            <CategoryCard
              imageUrl={Accessoires}
              imageAlt="Accessories category"
              categoryName="Accessories"
              numOfModels="0 models"
              categoryLink="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
