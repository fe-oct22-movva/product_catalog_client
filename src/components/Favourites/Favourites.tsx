import './Favourites.scss';
import {ProductCardSingle} from '../ProductCardSingle';
import {favouriteItem} from '../../types/types';
import {useEffect, useState} from 'react';
import {Breadcrumbs} from '../Breadcrumbs';

export const Favourites = () => {
  const [isFavouritesExist, setIsFavouritesExist] = useState<string | null>(
    null
  );

  const favouritesItems
    = isFavouritesExist === null ? [] : JSON.parse(isFavouritesExist);

  let cartItemsCounter = 0;

  favouritesItems.forEach(() => {
    cartItemsCounter++;
  });

  useEffect(() => {
    setIsFavouritesExist(localStorage.getItem('Favourites'));
    const handleStorage = () => {
      setIsFavouritesExist(localStorage.getItem('Favourites'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [favouritesItems]);

  return (
    <div className="main-container">
      <Breadcrumbs />
      {isFavouritesExist ? (
        <section className="favourites">
          <h1 className="favourites__title">Favourites</h1>

          <h3 className="favourites__subtitle">{cartItemsCounter} items</h3>

          <div className="favourites__catalog">
            {favouritesItems.map((favouritesItem: favouriteItem) => (
              <div className="favourites__catalog__items" key={favouritesItem.id}>
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
