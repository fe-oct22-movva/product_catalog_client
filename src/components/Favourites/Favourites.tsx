import './Favourites.scss';
import {ProductCardSingle} from '../ProductCardSingle';
import {favouriteItem} from '../../types/types';
import {useEffect, useState} from 'react';
import {Breadcrumbs} from '../Breadcrumbs';
import heartEmpty from '../../assets/images/icons/hearts-like-svgrepo-com.svg';

export const Favourites = () => {
  const [isFavouritesExist, setIsFavouritesExist] = useState<string | null>(
    null
  );

  const favouritesItems
    = isFavouritesExist === null ? [] : JSON.parse(isFavouritesExist);

  useEffect(() => {
    setIsFavouritesExist(localStorage.getItem('Favourites'));
    const handleStorage = () => {
      setIsFavouritesExist(localStorage.getItem('Favourites'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [favouritesItems]);

  return (
    <>
      <head>
        <title>Favourites</title>
      </head>
      <div className="main-container">
        <Breadcrumbs />
        {isFavouritesExist ? (
          <section className="favourites">
            <h1 className="favourites__title">Favourites</h1>

            <h3 className="favourites__subtitle">
              {favouritesItems.length} items
            </h3>

            <div className="favourites__catalog">
              {favouritesItems.map((favouritesItem: favouriteItem) => (
                <div
                  className="favourites__catalog__items"
                  key={favouritesItem.id}>
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
          <div className="favourites__empty">
            <img className="favourites__empty-photo" src={heartEmpty} alt="" />

            <h1 className="favourites__empty-title">
              Your favourites is empty
            </h1>

            <a href="#/phones" className="button-40">
              Add
            </a>
          </div>
        )}
      </div>
    </>
  );
};
