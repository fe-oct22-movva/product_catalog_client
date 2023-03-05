import styles from '../SortBy/SortBy.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';
import { useState } from 'react';

const sortByOptions = ['Newest', 'Alphabetically', 'Cheapest'];

interface Props {
  setSelectedSortBy: (selectedSortBy: string) => void;
  isSortByOpen: boolean;
}

export const SortBy: React.FC<Props> = ({
  setSelectedSortBy, 
  isSortByOpen
}) => {
  const [selectedOption, setSelectedOption] =useState(sortByOptions[0]);

  const selectOption = (value: string) => {
    setSelectedOption(value);
  }

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
          <div className={styles.dropdown__header__title}>
            {selectedOption}
          </div>

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
                  setSelectedSortBy(option)
                  selectOption(option)
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
