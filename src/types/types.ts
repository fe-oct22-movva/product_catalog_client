/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Phone {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

interface description {
  title: string;
  text: string[];
}

export interface PhoneSpec {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface NextAndPrev {
  page: number;
  limit: number;
}

export interface serverResponse {
  data(data: any): unknown;
  totalPhones: number;
  next: NextAndPrev;
  pages: number;
  prev: NextAndPrev;
  result: Phone[];
}

export enum SortTypes {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  ALPHABETICALLY = 'alphabetically',
  CHEAPEST = 'cheapest',
  MORE_EXPENSIVE = 'moreExpensive',
}

export interface cartItem {
  id: string;
  img: string;
  name: string;
  amount: number;
  price: number;
}

export interface favouriteItem {
  id: string;
  img: string;
  name: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
}

export interface Favourites {
  id: string;
  img: string;
  name: string;
  price: number;
  screen: string;
  capacity: string;
  fullPrice: number;
  ram: string;
}

export interface Cart {
  id: string;
  img: string;
  name: string;
  price: number;
}
