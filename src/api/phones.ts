import {serverResponse} from '../types/types';
import {client} from '../utils/fetchClient';

type Params = {
  sort?: string,
  limit?: number,
  page?: number
}

const paramsF = (params?: Params) => {
  const result = [];

  if (!params) {
    return '';
  }

  for (const key in params) {
    result.push(`&${key}=${params[key as keyof Params]}`);
  }

  console.log('?' + result.join('&'));

  return '?' + result.join('&');
};

export const getPhones = (params?: Params) => {
  console.log('params:', params);
  return client.get<serverResponse>(`/phones${paramsF(params)}`);
};
