import {Phone} from '../types/Phone';
import {client} from '../utils/fetchClient';

export const getPhones = () => {
  return client.get<Phone[]>('/phones');
};

export const getPhoneById = async (id: string) => {
  const phones = await client.get<Phone[]>(`/phones/${id}`);

  return phones[0] || null;
};

export const getNewestPhones = () => {
  return client.get<Phone[]>('./phones?sortBy=fromNewest');
};

export const getOldestPhones = () => {
  return client.get<Phone[]>('./phones?sortBy=fromOldest');
};

export const getMostExpensive = () => {
  return client.get<Phone[]>('./phones?sortBy=fromHighPrice');
};

export const getCheapest = () => {
  return client.get<Phone[]>('./phones?sortBy=fromLowPrice');
};
