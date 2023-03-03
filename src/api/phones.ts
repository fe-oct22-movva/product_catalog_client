import {client} from '../utils/fetchClient';
import {serverResponse} from '../types/types';

export const getPhones = () => {
  return client.get<serverResponse>('/phones');
};

export const getPhoneById = async (id: string) => {
  const phones = await client.get<serverResponse>(`/phones/${id}`);

  return phones || null;
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
