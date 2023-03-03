import {useState} from 'react';
import styles from '../ItemsOnPage/ItemsOnPage.module.scss';
import arrowDown from '../../assets/images/ArrowDown.svg';

const options2 = [12, 16, 20];

interface Props {
  setSelectedPhonesPerPage: (selectedPhonesPerPage: number) => void;
}

export const ItemsOnPage: React.FC<Props> = ({ setSelectedPhonesPerPage }) => {
  const [isItemsOnPageOpen, setIsItemsOnPageOpen] = useState(false);

  const handleItemsOnPage = () => {
    setIsItemsOnPageOpen(!isItemsOnPageOpen);
  };

  return (
    <div
      className={`
      ${styles.itemsOnPage}
      grid__item--mobile-3-4
      grid__item--tablet-5-7 
      grid__item--desctop-5-7
    `}>
      <p className={styles.itemsOnPage__description}>Items on page</p>

      <div className={styles.dropdown}>
        <button className={styles.dropdown__header} onClick={handleItemsOnPage}>
          <div className={styles.dropdown__title}>
            {options2[0]}
            <img className={styles.dropdown__arrow} src={arrowDown} />
          </div>
        </button>

        {isItemsOnPageOpen === false ? (
          <p></p>
        ) : (
          <div className={styles.dropdown__items}>
            {options2.map((option) => (
              <button
                key={option}
                className={styles.dropdown__option}
                onClick={() => setSelectedPhonesPerPage(option)}
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
