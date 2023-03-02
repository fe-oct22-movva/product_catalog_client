import { serverResponse } from '../types/types';
import {client} from '../utils/fetchClient';

export const getPhones = () => {
  return client.get<serverResponse>('/phones');
};

export const getPhoneById = (id: string) => {
  return client.get<serverResponse>(`/phones/${id}`);
};

export const getNewestPhones = () => {
  return client.get<serverResponse>('./phones?sortBy=fromNewest');
};

export const getOldestPhones = () => {
  return client.get<serverResponse>('./phones?sortBy=fromOldest');
};

export const getMostExpensive = () => {
  return client.get<serverResponse>('./phones?sortBy=fromHighPrice');
};

export const getCheapest = () => {
  return client.get<serverResponse>('./phones?sortBy=fromLowPrice');
};
