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

export enum SortTypes {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  ALPHABETICALLY = 'alphabetically',
  CHEAPEST = 'cheapest',
  MORE_EXPENSIVE = 'moreExpensive',
}

// export type Params = {
//   sort?: string,
//   limit?: number,
//   page?: number,
// };