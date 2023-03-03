import {useState} from 'react';
import styles from '../SortBy/SortBy.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';

const options1 = ['Newest', 'Alphabetically', 'Cheapest'];

interface Props {
  setSelectedSortBy: (selectedSortBy: string) => void;
}

export const SortBy: React.FC<Props> = ({ setSelectedSortBy }) => {
  const [isSortByOpen, setIsSortByOpen] = useState(false);

  const handleSortBy = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  return (
    <div
      className={`
      ${styles.sortBy}
      grid__item--mobile-1-2
      grid__item--tablet-1-4 
      grid__item--desctop-1-4
    `}>
      <div>
        <p className={styles.sortBy__description}>Sort by</p>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header} onClick={handleSortBy}>
          <div className={styles.dropdown__title}>
            {options1[0]}
          </div>
          
          <img className={styles.dropdown__arrow} src={arrowDown} />
        </button>

        {isSortByOpen === false ? (
          <p></p>
        ) : (
          <div className={styles.dropdown__items}>
            {options1.map((option) => (
              <button
                key={option}
                className={styles.dropdown__option}
                onClick={() => setSelectedSortBy(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
