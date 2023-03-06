import {cartItem, Favourites} from '../types/types';

export const handleDelete = (id: string, type: string) => {
  const itemsFromStorage = localStorage.getItem(type);
  const items = itemsFromStorage === null ? [] : JSON.parse(itemsFromStorage);

  const itemToDelete = items
    .find((item: Favourites | cartItem) => item.id === id
    );

  if (itemToDelete !== undefined) {
    const index = items.indexOf(itemToDelete);

    items.splice(index, 1);
  }

  localStorage.setItem(type, JSON.stringify(items));
  window.dispatchEvent(new Event('storage'));

  if (items.length === 0) {
    localStorage.removeItem(type);
  }
};
