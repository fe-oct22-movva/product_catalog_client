/* eslint-disable  @typescript-eslint/no-explicit-any */
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import arrowDown from '../../assets/images/ArrowDown.svg';
import arrowUp from '../../assets/images/ArrowUp.svg';
import {SortTypes} from '../../types/types';
import styles from '../SortBy/SortBy.module.scss';

const sortByOptions = Object.values(SortTypes);

interface Props {
  setSelectedSortBy: React.Dispatch<React.SetStateAction<SortTypes>>;
  selectedSortBy: string;
  isSortByOpen: boolean;
  setIsSortByOpen: Dispatch<SetStateAction<boolean>>;
}

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

  const stylesBlock = isSortByOpen
    ? {
      opacity: 1,
      Visibility: 'visible',
      transform: 'translateY(0)',
      transition: '0.3s ease',
    }
    : {
      opacity: 0,
      Visibility: 'hidden',
      transform: 'translateX(-20px)',
      transition: '0.3s ease',
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

        <div className={styles.dropdown__items} style={stylesBlock}>
          {sortByOptions.map((option) => (
            <button
              key={option}
              className={styles.dropdown__option}
              onClick={() => {
                selectSortBy(option);
              }}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
