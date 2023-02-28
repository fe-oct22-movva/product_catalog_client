export const ShopByCategory: React.FC = () => {
  return (
    <section className="page__section shop-by-category" id="shop-by-category">
      <div className="container">
        <h2 className="page__section-title">Shop by category</h2>

        <div className="grid-shop-by grid-shop-by--tablet grid-shop-by--desktop">
          <div className="shop-by-category__item grid-shop-by__item grid-shop-by__item--tablet-1-4 grid-shop-by__item--desktop-1-8">
            <div className="category">
              <img
                src="src/images/categories/phones.png"
                alt="Mobile phones category"
                className="category__photo"
              />

              <h4 className="category__name">
                <a href="#" className="category__link">
                  Mobile phones
                </a>
              </h4>

              <p className="category__description">95 models</p>
            </div>
          </div>

          <div className="shop-by-category__item grid-shop-by__item grid-shop-by__item--tablet-5-8 grid-shop-by__item--desktop-9-16">
            <div className="category">
              <img
                src="src/images/categories/tablets.png"
                alt="Tablets category"
                className="category__photo"
              />

              <h4 className="category__name">
                <a href="#" className="category__link">
                  Tablets
                </a>
              </h4>

              <p className="category__description">24 models</p>
            </div>
          </div>

          <div className="shop-by-category__item grid-shop-by__item grid-shop-by__item--tablet-9-12 grid-shop-by__item--desktop-17-24">
            <div className="category">
              <img
                src="src/images/categories/accessoires.png"
                alt="Tablets category"
                className="category__photo"
              />

              <h4 className="category__name">
                <a href="#" className="category__link">
                  Accessories
                </a>
              </h4>

              <p className="category__description">100 models</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
