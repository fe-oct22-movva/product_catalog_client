import { Link } from 'react-router-dom';
import styles from '../ArrowRight/ArrowRight.module.scss';
import { usePageParams } from '../../controllers/usePageParams';

interface Props {
  handleSearchParamsUpdate: (givenParamValue: string) => string;
}

export const ArrowRight: React.FC<Props> = ({handleSearchParamsUpdate}) => {
  const [, , currentPage] = usePageParams();

  return (
    <li>
      <Link
        className={styles.arrow}
        to={{
          search: handleSearchParamsUpdate((currentPage + 1).toString()),
        }}
      >
      </Link>
    </li>
  );
};
