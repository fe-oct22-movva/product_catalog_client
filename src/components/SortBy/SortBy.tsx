import styles from '../SortBy/SortBy.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';
import {useState} from 'react';
import {SortTypes} from '../../types/types';
import { createSearchParams, URLSearchParamsInit, useNavigate } from 'react-router-dom';

const sortByOptions = Object.values(SortTypes);

interface Props {
  setSelectedSortBy: React.Dispatch<React.SetStateAction<SortTypes>>;
  isSortByOpen: boolean;
}

const useNavigateBySearch = () => {
  const navigate = useNavigate();

  return (pathname: string, params: URLSearchParamsInit | undefined) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};

export const SortBy: React.FC<Props> = ({setSelectedSortBy, isSortByOpen}) => {
  const [selectedOption, setSelectedOption] = useState(sortByOptions[0]);

  const selectOption = (value: SortTypes) => {
    setSelectedOption(value);
  };

  const navigateSearch = useNavigateBySearch();

  const goToSortedPhones = (option: string) => {
    navigateSearch('/phones', {sort: `${option}`});
  };

  return (
    <div
      className={`
      ${styles.sortBy}
      
    `}>
      <div>
        <p className={styles.sortBy__description}>Sort by</p>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header}>
          <div className={styles.dropdown__header__title}>{selectedOption}</div>

          <img className={styles.dropdown__header__arrow} src={arrowDown} />
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
                  setSelectedSortBy(option);
                  selectOption(option);
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
