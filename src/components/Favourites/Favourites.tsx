import './Favourites.scss';
import {ProductCardSingle} from '../ProductCardSingle';
import {Phone} from '../../types/types';
import {useEffect, useState} from 'react';
import {CardHomePage} from '../ProductCard/CardHomePage';
//import {Breadcrumbs} from '../Breadcrumbs';

export const Favourites = () => {
  const [isFavouritesExist] = useState<string | null>(
    localStorage.getItem('Favourites')
  );
  const [favouritesItems, setFavouritesItems] = useState<Phone[]>([]);

  useEffect(() => {
    setFavouritesItems(
      isFavouritesExist === null ? null : JSON.parse(isFavouritesExist)
    );
  }, []);

  return (
    <div className="main-container">
    {/*<Breadcrumbs />*/}
      {isFavouritesExist ? (
        <section className="favourites">
          <h1 className="favourites__title">Favourites</h1>

          <h3 className="favourites__subtitle">5 items</h3>

          <div className="favourites__items">
            {favouritesItems.map((favouritesItem: Phone) => (
              <div className="favourites__item" key={favouritesItem.id}>
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
            ))}
          </div>
        </section>
      ) : (
        <h1>No content yet</h1>
      )}
    </div>
  );
};
