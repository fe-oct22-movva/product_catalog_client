import { ArrowLeft } from '../ArrowLeft';
import { ArrowRight } from '../ArrowRight';
import styles from '../Pagination/Pagination.module.scss';
import cn from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { usePageParams } from '../../controllers/usePageParams';

interface Props {
  pagesNumber: number;
}

export const Pagination: React.FC<Props> = ({ pagesNumber }) => {
  const paginationPages = [];

  for (let i = 1; i <= pagesNumber; i++) {
    paginationPages.push(i);
  }

  const [searchParams] = useSearchParams();
  const [, , currentPage] = usePageParams();

  const handleSearchParamsUpdate = (givenParamValue: string) => {
    if (givenParamValue < '1') {
      givenParamValue = '1';
    }

    if (givenParamValue > pagesNumber.toString()) {
      givenParamValue = pagesNumber.toString();
    }

    const newParams = new URLSearchParams(searchParams.toString());

    const paramsToUpdate = {
      page: givenParamValue,
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

    return updatedParams;
  };

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagination__list}>
        <ArrowLeft
          handleSearchParamsUpdate={handleSearchParamsUpdate}
        />

        {paginationPages.map((page) => (
          <li key={page}>
            <Link
              className={cn(styles.pagination__item, {
                [styles.pagination__item__chosen]: currentPage === page,
              })}
              to={{
                search: handleSearchParamsUpdate(page.toString()),
              }}
            >
              <p
                className={cn(styles.pagination__link, {
                  [styles.pagination__link__chosen]: currentPage === page,
                })}
              >
                {page}
              </p>
            </Link>
          </li>
        ))}

        <ArrowRight
          handleSearchParamsUpdate={handleSearchParamsUpdate}
        />
      </ul>
    </div>
  );
};
