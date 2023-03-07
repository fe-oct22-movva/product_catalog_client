import {Favourites} from '../types/types';

export const isIncludeItemLocalStorage = (key: string, id: string) => {
  const string = localStorage.getItem(key);

  const parsedString
    = string === null ? [] : JSON.parse(string);

  return parsedString.find(
    (favourite: Favourites) => favourite.id === id
  );
};
