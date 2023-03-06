import {serverResponse} from '../types/types';
import {client} from '../utils/fetchClient';

export const getPhones = () => {
  return client.get<serverResponse>('/phones');
};

export const getAllPhones = (criterion: string[][]) => {
  return client.get<serverResponse>('/phones', criterion);
};

export const getPhoneById = (id: string) => {
  return client.get<serverResponse>(`/phones/${id}`);
};