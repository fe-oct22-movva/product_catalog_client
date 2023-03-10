import {cartItem, favouriteItem} from '../types/types';

export const localStorageAdd = (
  data: favouriteItem | cartItem,
  key: string
) => {
  const itemsForKey = localStorage.getItem(key);
  const itemsForKeyNotNull
    = itemsForKey !== null ? JSON.parse(itemsForKey) : null;

  if (!itemsForKeyNotNull) {
    localStorage.setItem(key, JSON.stringify([data]));
    window.dispatchEvent(new Event('storage'));
  }

  itemsForKeyNotNull.push(data);

  localStorage.setItem(key, JSON.stringify(itemsForKeyNotNull));
  window.dispatchEvent(new Event('storage'));
};
