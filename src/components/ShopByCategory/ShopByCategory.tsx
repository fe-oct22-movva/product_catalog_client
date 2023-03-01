import {CategoryCard} from '../CategoryCard';

import Phones from '../../assets/images/categories/phones.png';
import Tablets from '../../assets/images/categories/tablets.png';
import Accessoires from '../../assets/images/categories/accessoires.png';

export const ShopByCategory: React.FC = () => {
  return (
    <section className="shopByCategory" id="shop-by-category">
      <div className="container">
        <h2 className="shopByCategory__title">Shop by category</h2>

        <div className="grid-shop-by grid-shop-by--tablet grid-shop-by--desktop">
          <div
            className="
              shopByCategory__item
              grid-shop-by__item
              grid-shop-by__item--tablet-1-4
              grid-shop-by__item--desktop-1-8"
          >
            <CategoryCard
              imageUrl={Phones}
              imageAlt="Mobile phones category"
              categoryName="Mobile phones"
              numOfModels="95 models"
              categoryLink="#"
            />
          </div>

          <div
            className="
              shopByCategory__item
              grid-shop-by__item
              grid-shop-by__item--tablet-5-8
              grid-shop-by__item--desktop-9-16"
          >
            <CategoryCard
              imageUrl={Tablets}
              imageAlt="Tablets category"
              categoryName="Tablets"
              numOfModels="24 models"
              categoryLink="#"
            />
          </div>

          <div
            className="
              shopByCategory__item
              grid-shop-by__item
              grid-shop-by__item--tablet-9-12
              grid-shop-by__item--desktop-17-24"
          >
            <CategoryCard
              imageUrl={Accessoires}
              imageAlt="Accessories category"
              categoryName="Accessories"
              numOfModels="100 models"
              categoryLink="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
