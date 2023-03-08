import {cartItem, favouriteItem} from '../types/types';

export const setItemLocalStorage = (
  key: string,
  array: cartItem[] | favouriteItem[]
) => {
  localStorage.setItem(key, JSON.stringify(array));
  window.dispatchEvent(new Event('storage'));
};
