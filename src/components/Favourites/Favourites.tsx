import './Favourites.scss';
import {ProductCardSingle} from '../ProductCardSingle';
import {Phone} from '../../types/types';
import {useEffect, useState} from 'react';

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
      {isFavouritesExist ? (
        <section className="favourites">
          <h1 className="favourites__title">Favourites</h1>

          <h3 className="favourites__subtitle">5 items</h3>

          <div className="favourites__items">
            {favouritesItems.map((favouritesItem: Phone) => (
              <div className="favourites__item" key={favouritesItem.id}>
                <ProductCardSingle phone={favouritesItem} />
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
