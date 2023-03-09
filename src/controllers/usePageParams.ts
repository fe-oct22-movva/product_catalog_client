import {useSearchParams} from 'react-router-dom';

type HookOutput = [string, number, number];

export const usePageParams = (): HookOutput => {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'newest';
  const perPage = Number(searchParams.get('perPage')) || 12;
  const currentPage = Number(searchParams.get('page')) || 1;

  return [sortBy, perPage, currentPage];
};
