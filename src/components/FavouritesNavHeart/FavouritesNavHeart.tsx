import React, {memo, useEffect, useState} from 'react';
import heart from '../../assets/images/Favourites.svg';
import {HeaderIconNavLink} from '../../pages/HomePage/Header/HeaderIconNavLink';

export const FavouritesNavHeart = memo(
  () => {
    const [favouritesFromLocal, setFavouritesFromLocal] = useState<string | null>(
      null
    );
  
    const favouritesItems
      = favouritesFromLocal === null ? [] : JSON.parse(favouritesFromLocal).length;
  
    useEffect(() => {
      setFavouritesFromLocal(localStorage.getItem('Favourites'));
  
      const handleStorage = () => {
        setFavouritesFromLocal(localStorage.getItem('Favourites'));
      };
  
      window.addEventListener('storage', handleStorage);
      return () => window.removeEventListener('storage', handleStorage);
    }, []);
  
    return (
      <HeaderIconNavLink
        to="/favourites"
        textToDisplay={
          <li className="aside-container__item">
            <img
              className="aside-container__item-photo"
              src={heart}
              alt="favourite items"
            />
  
            {favouritesItems > 0 && (
              <p className="aside-container__item-fav-counter">
                {favouritesItems}
              </p>
            )}
          </li>
        }
      />
    );
  },
);

FavouritesNavHeart.displayName = 'FavouritesNavHeart';
