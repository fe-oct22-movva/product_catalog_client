import './Favourites.scss';
import {ProductCardSingle} from '../ProductCardSingle';
import {favouriteItem, Phone} from '../../types/types';
import {useEffect, useState} from 'react';
//import {Breadcrumbs} from '../Breadcrumbs';

export const Favourites = () => {
  const [isFavouritesExist] = useState<string | null>(
    localStorage.getItem('Favourites')
  );
  const [favouritesItems, setFavouritesItems] = useState([]);

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
            {favouritesItems.map((favouritesItem: favouriteItem) => (
              <div className="favourites__item" key={favouritesItem.id}>
                <ProductCardSingle
                  id={favouritesItem.id}
                  img={favouritesItem.img}
                  name={favouritesItem.name}
                  price={favouritesItem.price}
                  fullPrice={favouritesItem.fullPrice}
                  screen={favouritesItem.screen}
                  capacity={favouritesItem.capacity}
                  ram={favouritesItem.ram}
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
