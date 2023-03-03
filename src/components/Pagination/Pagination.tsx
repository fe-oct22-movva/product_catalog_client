import {ArrowLeft} from '../ArrowLeft';
import {ArrowRight} from '../ArrowRight';
import styles from '../Pagination/Pagination.module.scss';

const paginationPages = [1, 2, 3, 4, 5];

export const Pagination: React.FC = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__list}>
        <ArrowLeft />

        {paginationPages.map((page) => (
          <div className={styles.pagination__item} key={page}>
            <a href="#" className={styles.pagination__link}>
              {page}
            </a>
          </div>
        ))}

        <ArrowRight />
      </div>
    </div>
  );
};
