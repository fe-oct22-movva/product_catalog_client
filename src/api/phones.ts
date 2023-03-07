import {serverResponse} from '../types/types';
import {client} from '../utils/fetchClient';

type Params = {
  sort?: string;
  limit?: number;
  page?: number;
};

export const getAllPhones = (criterion?: string[][]) => {
  return client.get<serverResponse>('/phones', criterion);
};

export const getPhoneById = (id: string) => {
  return client.get<serverResponse>(`/phones/${id}`);
};
