/* eslint-disable  @typescript-eslint/no-explicit-any */
import styles from '../SortBy/SortBy.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';
import arrowUp from '../../assets/images/ArrowUp.svg';
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import {SortTypes} from '../../types/types';
import { createSearchParams, URLSearchParamsInit, useNavigate } from 'react-router-dom';

const sortByOptions = Object.values(SortTypes);

interface Props {
  setSelectedSortBy: React.Dispatch<React.SetStateAction<SortTypes>>;
  selectedSortBy: string;
  isSortByOpen: boolean;
  setIsSortByOpen: Dispatch<SetStateAction<boolean>>;
}

const useNavigateBySearch = () => {
  const navigate = useNavigate();

  return (pathname: string, params: URLSearchParamsInit | undefined) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};

export const SortBy: React.FC<Props> = ({
  setSelectedSortBy,
  selectedSortBy,
  isSortByOpen,
  setIsSortByOpen,
}) => {
  const dropdownRef = useRef<any>();

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortByOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [dropdownRef]);

  const selectSortBy = (value: SortTypes) => {
    setSelectedSortBy(value);
  };

  const navigateSearch = useNavigateBySearch();

  const goToSortedPhones = (option: string) => {
    navigateSearch('/phones', {sort: `${option}`});
  };

  return (
    <div
      ref={dropdownRef}
      className={`
      ${styles.sortBy}
      
    `}>
      <div>
        <p className={styles.sortBy__description}>Sort by</p>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header}>
          <div className={styles.dropdown__header__title}>{selectedSortBy}</div>

          {!isSortByOpen ? (
            <img
              className={styles.dropdown__header__arrow__down}
              src={arrowDown}
            />
          ) : (
            <img className={styles.dropdown__header__arrow__up} src={arrowUp} />
          )}
        </button>

        {!isSortByOpen ? (
          <p></p>
        ) : (
          <div className={styles.dropdown__items}>
            {sortByOptions.map((option) => (
              <button
                key={option}
                className={styles.dropdown__option}
                onClick={() => {
                  selectSortBy(option);
                  goToSortedPhones(option);
                }}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
