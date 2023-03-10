/* eslint-disable  @typescript-eslint/no-explicit-any */
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import arrowDown from '../../assets/images/ArrowDown.svg';
import arrowUp from '../../assets/images/ArrowUp.svg';
import styles from '../SortBy/SortBy.module.scss';
import {useSearchParams} from 'react-router-dom';
import {usePageParams} from '../../controllers/usePageParams';

interface Props {
  options: string[][];
  isSortByOpen: boolean;
  setIsSortByOpen: Dispatch<SetStateAction<boolean>>;
}

export const SortBy: React.FC<Props> = ({
  options,
  isSortByOpen,
  setIsSortByOpen,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchParamsUpdate = (givenParamValue: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    const paramsToUpdate = {
      sortBy: givenParamValue,
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

  const [sortBy] = usePageParams();

  const getDropdownHeader = () => {
    for (const option of options) {
      if (option[0] === sortBy) {
        return option[1];
      }
    }
  };

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
      className={styles.sortBy}>
      <div>
        <p className={styles.sortBy__description}>Sort by</p>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header}>
          <div className={styles.dropdown__header__title}>
            {getDropdownHeader()}
          </div>

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
          {options.map((option) => {
            const [optionToPass, optionToShow] = option;

            return (
              <button
                key={optionToPass}
                value={optionToPass}
                className={styles.dropdown__option}
                onClick={() => {
                  handleSearchParamsUpdate(optionToPass);
                }}>
                {optionToShow}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
