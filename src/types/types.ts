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
  next: NextAndPrev;
  pages: number;
  prev: NextAndPrev;
  result: Phone[];
}

export interface cartItem {
  id: string;
  img: string;
  name: string;
  price: number;
}
