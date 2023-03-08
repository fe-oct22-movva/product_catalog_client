import styles from '../SortBy/SortBy.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';
import arrowUp from '../../assets/images/ArrowUp.svg';

import {useState} from 'react';
import {SortTypes} from '../../types/types';

const sortByOptions = Object.values(SortTypes);

interface Props {
  setSelectedSortBy: React.Dispatch<React.SetStateAction<SortTypes>>;
  isSortByOpen: boolean;
}

export const SortBy: React.FC<Props> = ({setSelectedSortBy, isSortByOpen}) => {
  const [selectedOption, setSelectedOption] = useState(sortByOptions[0]);

  const selectOption = (value: SortTypes) => {
    setSelectedOption(value);
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

          {!isSortByOpen ? (
            <img className={styles.dropdown__header__arrow__down} src={arrowDown} />
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
                  setSelectedSortBy(option);
                  selectOption(option);
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
