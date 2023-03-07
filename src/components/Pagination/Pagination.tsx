import {ArrowLeft} from '../ArrowLeft';
import {ArrowRight} from '../ArrowRight';
import styles from '../Pagination/Pagination.module.scss';
import cn from 'classnames';

interface Props {
  pagesNumber: number;
  paginate: (pageNumber: number) => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  chosenPageNumber: number;
}

export const Pagination: React.FC<Props> = (props) => {
  const {
    pagesNumber,
    paginate,
    goToPreviousPage,
    goToNextPage,
    chosenPageNumber,
  } = props;

  const paginationPages = [];

  for (let i = 1; i <= pagesNumber; i++) {
    paginationPages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagination__list}>
        <ArrowLeft goToPreviousPage={goToPreviousPage} />

        {paginationPages.map((page) => (
          <li
            key={page}
            className={cn(styles.pagination__item, {
              [styles.pagination__chosen]: chosenPageNumber === page,
            })}
            onClick={() => paginate(page)}>
            {page}
          </li>
        ))}

        <ArrowRight goToNextPage={goToNextPage} />
      </ul>
    </div>
  );
};
