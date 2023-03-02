import { ArrowLeft } from '../ArrowLeft';
import { ArrowRight } from '../ArrowRight';
import styles from '../Pagination/Pagination.module.scss';

export const Pagination: React.FC = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__list}>
        <ArrowLeft />

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

        <ArrowRight />
      </div>
    </div>
  );
};
