import styles from '../Breadcrumbs/Breadcrumbs.module.scss';
import home from '../../assets/images/Home.svg';
import arrowRight from '../../assets/images/ArrowRight.svg';
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Breadcrumbs: React.FC = () => {
  const [title, setTitle] = useState(document.title);
  const location = useLocation();
  let currentLink = '';

  useEffect(() => {
    const originalTitle = document.title;
    setTitle(originalTitle);

    const handleTitleChange = () => {
      setTitle(document.title);
    };
    document.addEventListener('titleChange', handleTitleChange);

    return () => {
      document.removeEventListener('titleChange', handleTitleChange);
    };
  }, []);

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <Link key={crumb} to={currentLink} className={styles.breadcrumbs__link}>
          {title}
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
