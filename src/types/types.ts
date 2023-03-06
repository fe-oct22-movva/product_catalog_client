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

export interface NextAndPrev {
  page: number;
  limit: number;
}

export interface serverResponse {
  totalPhones: number;
  next: NextAndPrev;
  pages: number;
  prev: NextAndPrev;
  result: Phone[];
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
  ram: string;
}

export interface Cart {
  id: string;
  img: string;
  name: string;
  price: number;
}
