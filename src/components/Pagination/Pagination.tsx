import styles from '../Pagination/Pagination.module.scss';

export const Pagination: React.FC = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__list}>
        <div className={styles.pagination__item}>
          <a href="#" className={styles.pagination__link}></a>
        </div>

        <div className={styles.pagination__item}>
          <a href="#" className={styles.pagination__link}>
            1
          </a>
        </div>

        <div className={styles.pagination__item}>
          <a href="#" className={styles.pagination__link}>
            2
          </a>
        </div>

        <div className={styles.pagination__item}>
          <a href="#" className={styles.pagination__link}>
            3
          </a>
        </div>

        <div className={styles.pagination__item}>
          <a href="#" className={styles.pagination__link}>
            4
          </a>
        </div>

        <div className={styles.pagination__item}>
          <a href="#" className={styles.pagination__link}></a>
        </div>
      </div>
    </div>
  );
};
