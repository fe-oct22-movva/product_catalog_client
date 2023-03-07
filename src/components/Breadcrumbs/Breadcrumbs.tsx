import styles from '../Breadcrumbs/Breadcrumbs.module.scss';
import home from '../../assets/images/Home.svg';
import arrowRight from '../../assets/images/ArrowRight.svg';
import {Link, useLocation} from 'react-router-dom';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <Link key={crumb} to={currentLink}>
          <p className={styles.breadcrumbs__link}>{crumb}</p>
        </Link>
      );
    });

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}>
        <Link to="/">
          <img className={styles.breadcrumbs__image} src={home} />
        </Link>

        <img className={styles.breadcrumbs__arrow} src={arrowRight} />

        {crumbs}
      </div>
    </div>
  );
};
