import './Favourites.scss';
// import {ProductCardSingle} from '../ProductCardSingle';
import {CardHomePage} from '../ProductCard/CardHomePage';
import {Breadcrumbs} from '../Breadcrumbs';

export const Favourites = () => {
  return (
    <div className="main-container">
      <Breadcrumbs />
      <section className="favourites">
        <h1 className="favourites__title">Favourites</h1>

        <h3 className="favourites__subtitle">5 items</h3>

        <div className="favourites__items">
          {/* {phones.map((phone) => (
            <div key={phone.id} className={styles.catalog__item}>
              <ProductCardSingle
                img={phone.image}
                name={phone.name}
                price={phone.price}
                fullPrice={phone.fullPrice}
                screen={phone.screen}
                capacity={phone.capacity}
                ram={phone.ram}
              />
            </div>
          ))} */}

          <div className="favourites__items">
            <CardHomePage
              img="https://fe-oct22-movva.github.io/product_catalog_client/assets/gold-c923c67c.jpg"
              name={'Test product'}
              price={'$859'}
              screen={'6.7” OLED'}
              capacity={'128 GB'}
              ram={'6 GB'}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
