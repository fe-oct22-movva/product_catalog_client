import styles from '../ItemsOnPage/ItemsOnPage.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';
import arrowUp from '../../assets/images/ArrowUp.svg';

import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';

const itemsOnPageOptions = [12, 16, 20];

interface Props {
  setSelectedPhonesPerPage: React.Dispatch<React.SetStateAction<number>>;
  selectedPhonesPerPage: number;
  isItemsOnPageOpen: boolean;
  setItemsOnPageOpen: Dispatch<SetStateAction<boolean>>;
}

export const ItemsOnPage: React.FC<Props> = ({
  setSelectedPhonesPerPage,
  selectedPhonesPerPage,
  isItemsOnPageOpen,
  setItemsOnPageOpen,
}) => {
  // const [selectedOption, setSelectedOption] = useState(itemsOnPageOptions[0]);
  const dropdownRef = useRef<any>();

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setItemsOnPageOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [dropdownRef]);

  const selectOption = (value: number) => {
    setSelectedPhonesPerPage(value);
  };

  return (
    <div ref={dropdownRef}
      className={`
      ${styles.itemsOnPage}
      
    `}>
      <p className={styles.itemsOnPage__description}>Items on page</p>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header}>
          <div className={styles.dropdown__header__title}>{selectedPhonesPerPage}</div>
          {!isItemsOnPageOpen ? (
            <img
              className={styles.dropdown__header__arrow__down}
              src={arrowDown}
            />
          ) : (
            <img className={styles.dropdown__header__arrow__up} src={arrowUp} />
          )}
        </button>

        {!isItemsOnPageOpen ? (
          <p></p>
        ) : (
          <div className={styles.dropdown__items}>
            {itemsOnPageOptions.map((option) => (
              <button
                key={option}
                className={styles.dropdown__option}
                onClick={() => {
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
