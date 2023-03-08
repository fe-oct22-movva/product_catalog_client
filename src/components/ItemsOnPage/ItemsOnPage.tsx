/* eslint-disable  @typescript-eslint/no-explicit-any */
import styles from '../ItemsOnPage/ItemsOnPage.module.scss';
import arrowUp from '../../assets/images/ArrowUp.svg';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { createSearchParams, URLSearchParamsInit, useNavigate } from 'react-router-dom';

import arrowDown from '../../assets/images/ArrowDown.svg';
import {useState} from 'react';

const itemsOnPageOptions = [12, 16, 20];

interface Props {
  setSelectedPhonesPerPage: React.Dispatch<React.SetStateAction<number>>;
  selectedPhonesPerPage: number;
  isItemsOnPageOpen: boolean;
  setItemsOnPageOpen: Dispatch<SetStateAction<boolean>>;
}

const useNavigateBySearch = () => {
  const navigate = useNavigate();

  return (pathname: string, params: URLSearchParamsInit | undefined) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};

export const ItemsOnPage: React.FC<Props> = ({
  setSelectedPhonesPerPage,
  isItemsOnPageOpen,
  selectedPhonesPerPage,
  setItemsOnPageOpen,
}) => {
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

  const navigateSearch = useNavigateBySearch();

  const goToSortedPhones = (option: string) => {
    navigateSearch('/phones', { perPage: `${option}` });
  };

  const navigateSearch = useNavigateBySearch();

  const goToSortedPhones = (option: string) => {
    navigateSearch('/phones', { perPage: `${option}` });
  };

  return (
    <div
      ref={dropdownRef}
      className={`
      ${styles.itemsOnPage}
      
    `}>
      <p className={styles.itemsOnPage__description}>Items on page</p>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header}>
          <div className={styles.dropdown__header__title}>
            {selectedPhonesPerPage}
          </div>
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
