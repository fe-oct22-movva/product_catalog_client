import styles from '../ItemsOnPage/ItemsOnPage.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';
import { useState } from 'react';
import { createSearchParams, URLSearchParamsInit, useNavigate } from 'react-router-dom';

const itemsOnPageOptions = [12, 16, 20];

interface Props {
  setSelectedPhonesPerPage: (selectedPhonesPerPage: number) => void;
  isItemsOnPageOpen: boolean;
}

const useNavigateBySearch = () => {
  const navigate = useNavigate();

  return (pathname: string, params: URLSearchParamsInit | undefined) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};

export const ItemsOnPage: React.FC<Props> = ({
  setSelectedPhonesPerPage,
  isItemsOnPageOpen,
}) => {
  const [selectedOption, setSelectedOption] = useState(itemsOnPageOptions[0]);

  const selectOption = (value: number) => {
    setSelectedOption(value);
  };

  const navigateSearch = useNavigateBySearch();

  const goToSortedPhones = (option: string) => {
    navigateSearch('/phones', { perPage: `${option}` });
  };

  return (
    <div
      className={`
      ${styles.itemsOnPage}
      
    `}>
      <p className={styles.itemsOnPage__description}>Items on page</p>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header}>
          <div className={styles.dropdown__header__title}>{selectedOption}</div>
          <img className={styles.dropdown__header__arrow} src={arrowDown} />
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
                  setSelectedPhonesPerPage(option);
                  selectOption(option);
                  goToSortedPhones(option.toString());
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
