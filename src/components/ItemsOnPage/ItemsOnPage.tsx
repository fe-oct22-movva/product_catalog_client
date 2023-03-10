/* eslint-disable  @typescript-eslint/no-explicit-any */
import arrowUp from '../../assets/images/ArrowUp.svg';
import React, {Dispatch, memo, SetStateAction, useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import arrowDown from '../../assets/images/ArrowDown.svg';
import styles from '../ItemsOnPage/ItemsOnPage.module.scss';

const itemsOnPageOptions = [12, 16, 20];

interface Props {
  defaultValue: number;
  isItemsOnPageOpen: boolean;
  setItemsOnPageOpen: Dispatch<SetStateAction<boolean>>;
}

export const ItemsOnPage: React.FC<Props> = memo(
  ({defaultValue, isItemsOnPageOpen, setItemsOnPageOpen}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearchParamsUpdate = (givenParamValue: string) => {
      const newParams = new URLSearchParams(searchParams.toString());

      const paramsToUpdate = {
        perPage: givenParamValue,
        page: '1',
      };

      Object.entries(paramsToUpdate).forEach(([key, value]) => {
        if (value === null) {
          newParams.delete(key);
        } else if (Array.isArray(value)) {
          newParams.delete(key);

          value.forEach((part) => {
            newParams.append(key, part);
          });
        } else {
          newParams.set(key, value);
        }
      });

      const updatedParams = newParams.toString();

      setSearchParams(updatedParams);
    };

    const dropdownRef = useRef<any>();

    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (
          dropdownRef.current
          && !dropdownRef.current.contains(event.target)
        ) {
          setItemsOnPageOpen(false);
        }
      }

      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [dropdownRef]);

    const stylesBlock = isItemsOnPageOpen
      ? {
        opacity: 1,
        Visibility: 'visible',
        transform: 'translateY(0)',
        transition: '0.3s ease',
      }
      : {
        opacity: 0,
        Visibility: 'hidden',
        transform: 'translateX(+20px)',
        transition: '0.3s ease',
      };

    return (
      <div ref={dropdownRef} className={styles.itemsOnPage}>
        <p className={styles.itemsOnPage__description}>Items on page</p>

        <div className={styles.dropdown}>
          <button className={styles.dropdown__header}>
            <div className={styles.dropdown__header__title}>{defaultValue}</div>
            {!isItemsOnPageOpen ? (
              <img
                className={styles.dropdown__header__arrow__down}
                src={arrowDown}
              />
            ) : (
              <img
                className={styles.dropdown__header__arrow__up}
                src={arrowUp}
              />
            )}
          </button>

          <div className={styles.dropdown__items} style={stylesBlock}>
            {itemsOnPageOptions.map((option) => (
              <button
                key={option}
                value={option}
                className={styles.dropdown__option}
                onClick={() => {
                  handleSearchParamsUpdate(option.toString());
                }}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ItemsOnPage.displayName = 'ItemsOnPage';
